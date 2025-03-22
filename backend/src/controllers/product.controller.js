const {admin,db,bucket}=require("../lib/firebase.js")


const validateToken = async (authToken) => {
    try {
      if (!authToken) throw new Error("Unauthorized: Missing login token.");
      const decodedToken = await getAuth().verifyIdToken(authToken);
      return {
        userId: decodedToken.uid,
        role: decodedToken.role || "user", // Default to "user" if role isn't explicitly defined
      };
    } catch (error) {
      throw new Error("Unauthorized: Invalid login token.");
    }
  };

const addProduct=async(req,res)=>{
    try
    {
        const authToken = req.headers.authorization?.split(" ")[1]; // Expecting `Bearer <token>`
        const { userId, role } = await validateToken(authToken);

        if (role !== "seller" && role !== "partner") {
            return res.status(403).json({ error: "Forbidden: Only sellers or partners can create products." });
    }
    const {
        productName,
        shortDescription,
        price,
        category,
        features,
        detailedDescription,
      } = req.body;
  
      let mainPhotoUrl = "";
      let referencePhotoUrl = "";
  
      if (req.files["mainPhoto"]) {
        const mainPhotoFile = req.files["mainPhoto"][0];
        const mainPhotoRef = bucket.file(`images/${Date.now()}_${mainPhotoFile.originalname}`);
        await mainPhotoRef.save(mainPhotoFile.buffer);
        mainPhotoUrl = `https://storage.googleapis.com/${bucket.name}/${mainPhotoRef.name}`;
      }
  
      if (req.files["referencePhoto"]) {
        const referencePhotoFile = req.files["referencePhoto"][0];
        const referencePhotoRef = bucket.file(`images/${Date.now()}_${referencePhotoFile.originalname}`);
        await referencePhotoRef.save(referencePhotoFile.buffer);
        referencePhotoUrl = `https://storage.googleapis.com/${bucket.name}/${referencePhotoRef.name}`;
      }
  
      const product = {
        productName,
        shortDescription,
        price: parseFloat(price),
        category,
        features: JSON.parse(features), // Assume it's passed as a JSON string
        detailedDescription,
        mainPhoto: mainPhotoUrl,
        referencePhoto: referencePhotoUrl,
        creatorId: userId,
        creatorRole: role,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
  
      const productRef = await db.collection("products").add(product);
      res.status(201).json({ message: "Product created successfully", id: productRef.id });
    } catch (error) {
      res.status(500).json({ error: "Failed to create product", details: error.message });
    }
  };
    


const getAllProducts=async(req,res)=>{
    try {
        const authToken = req.headers.authorization?.split(" ")[1];
        const { userId, role } = await validateToken(authToken);
    
        if (role === "user") {
          // Regular users: Fetch general products
          const snapshot = await db.collection("products").get();
          const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          return res.status(200).json(products);
        } else {
          // Sellers/Partners: Fetch only their own products
          const snapshot = await db.collection("products").where("creatorId", "==", userId).get();
          const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          return res.status(200).json(products);
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch products", details: error.message });
      }
    
}

const getSpecificProduct=async(req,res)=>{
    try {
        const productRef = db.collection("products").doc(req.params.id);
        const product = await productRef.get();

        if (!product.exists) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ id: product.id, ...product.data() });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product", details: error.message });
    }
}

const updateSpecificProduct=async(req,res)=>{
    try {
        const authToken = req.headers.authorization?.split(" ")[1];
        const { userId, role } = await validateToken(authToken);
    
        const productRef = db.collection("products").doc(req.params.id);
        const product = await productRef.get();
    
        if (!product.exists) {
          return res.status(404).json({ error: "Product not found." });
        }
    
        if (product.data().creatorId !== userId) {
          return res.status(403).json({ error: "Forbidden: You cannot update products that you don't own." });
        }
    
        const updates = req.body;
    
        if (req.files["mainPhoto"]) {
          const mainPhotoFile = req.files["mainPhoto"][0];
          const mainPhotoRef = bucket.file(`images/${Date.now()}_${mainPhotoFile.originalname}`);
          await mainPhotoRef.save(mainPhotoFile.buffer);
          updates.mainPhoto = `https://storage.googleapis.com/${bucket.name}/${mainPhotoRef.name}`;
        }
    
        if (req.files["referencePhoto"]) {
          const referencePhotoFile = req.files["referencePhoto"][0];
          const referencePhotoRef = bucket.file(`images/${Date.now()}_${referencePhotoFile.originalname}`);
          await referencePhotoRef.save(referencePhotoFile.buffer);
          updates.referencePhoto = `https://storage.googleapis.com/${bucket.name}/${referencePhotoRef.name}`;
        }
    
        updates.updatedAt = new Date();
    
        await productRef.update(updates);
        res.status(200).json({ message: "Product updated successfully." });
      } catch (error) {
        res.status(500).json({ error: "Failed to update product", details: error.message });
      }
}

const deleteSpecificProduct=async(req,res)=>{
    try {
        const authToken = req.headers.authorization?.split(" ")[1];
        const { userId, role } = await validateToken(authToken);
    
        const productRef = db.collection("products").doc(req.params.id);
        const product = await productRef.get();
    
        if (!product.exists) {
          return res.status(404).json({ error: "Product not found." });
        }
    
        if (product.data().creatorId !== userId) {
          return res.status(403).json({ error: "Forbidden: You cannot delete products that you don't own." });
        }
    
        await productRef.delete();
        res.status(200).json({ message: "Product deleted successfully." });
      } catch (error) {
        res.status(500).json({ error: "Failed to delete product", details: error.message });
      }
}

module.exports={addProduct,getAllProducts,getSpecificProduct,updateSpecificProduct,deleteSpecificProduct}