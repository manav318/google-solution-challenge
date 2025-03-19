const { admin, db, bucket } = require("../lib/firebase");
const {v2:cloudinary}=require("cloudinary")




// Submit all data and generate UID
const submitSellerData = async (req, res) => {
    try {
        const { sellerName, email, password, logoFile } = req.body;
        cloudinary.config({
            cloud_name: process.env.cloudName, // Replace with your Cloudinary Cloud name
            api_key: process.env.cloudinaryAPIKey,       // Replace with your API Key
            api_secret: process.env.cloudinaryAPISecret, // Replace with your API Secret
        });
        // Step 1: Create user in Firebase Authentication
        const userRecord = await admin.auth().createUser({
            email,
            password,
        });
        const sellerId = userRecord.uid; // Use the UID as the seller ID
        await db.collection("users").doc(userRecord.uid).set({
            username: sellerName,
            email: userRecord.email,
            role: "seller", 
            createdAt: new Date().toISOString(),
        });
        const formattedLogoFile = logoFile.startsWith("data:")
            ? logoFile // If already prefixed, use as-is
            : `data:application/pdf;base64,${logoFile}`;
        
        const result = await cloudinary.uploader.upload(formattedLogoFile,{
            folder: `sellers/${sellerId}`,
            resource_type:'auto' // Organize files by sellerId
        });
        const logoURL = result.secure_url; // Get the secure Cloudinary URL

        // Step 3: Save basic info to Firestore
        
        await db.collection("sellers").doc(sellerId).set({
            sellerName,
            email,
            logo: logoURL,
        });

        res.status(200).send({ message: "Seller created successfully!", sellerId });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to create seller" });
}
}


const additionalSellerData = async (req, res) => {
    try {
        const { sellerId } = req.params;
        console.log(req.body)
        const { details, documents } = req.body;
        cloudinary.config({
            cloud_name: process.env.cloudName, // Replace with your Cloudinary Cloud name
            api_key: process.env.cloudinaryAPIKey,       // Replace with your API Key
            api_secret: process.env.cloudinaryAPISecret, // Replace with your API Secret
        });

        const uploadedDocs = [];
        console.log("documents: ",documents)
        for (const base64File of documents) {
            // Upload file to Cloudinary
            const formattedFile = base64File.startsWith("data:")
                ? base64File // If already prefixed, use as-is
                : `data:application/pdf;base64,${base64File}`;
            const result = await cloudinary.uploader.upload(formattedFile, {
                folder: `sellers/${sellerId}`,
                resource_type:'auto' // Organize files in folders based on sellerId
            });
            uploadedDocs.push(result.secure_url); // Save the secure URL from Cloudinary
        }

        // Save details and document URLs in your database (Firestore or any other database)
        // Example: Firestore structure
        
        const detailsRef = db.collection("sellers").doc(sellerId).collection("details").doc("info");
        await detailsRef.set({
            ...details,
            documents: uploadedDocs,
        });

        res.status(200).send({ message: `Seller details saved successfully! ${uploadedDocs}` });
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        res.status(500).send({ error: "Failed to save details" });
    }

}

const getSellerDetails=async(req,res)=>{
    
}


module.exports={submitSellerData,additionalSellerData,getSellerDetails}

    