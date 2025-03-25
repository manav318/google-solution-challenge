const { admin } = require("./lib/firebase");
const db = admin.firestore();

const authRoutes=require("./routes/auth.route")
const sellerRoutes=require("./routes/seller.route")
const productRoutes=require("./routes/product.route")

const express = require('express');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
require("dotenv").config();


const port=7000

const cors=require("cors");
const { signup, login } = require("./controllers/auth.controller");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}
const app = express();


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())

app.use(cors(corsOptions)) 
app.use("/api/auth",authRoutes)
app.use("/api/upload",sellerRoutes)
app.use("/api/products",productRoutes)
app.get("/api/get-role/:uid", async(req,res)=>{
    const {uid}=req.params
    try {
        const docRef = db.collection("users").doc(uid); // Change `collection` to match your structure
        const snapshot = await docRef.get();

        if (snapshot.exists) {
            const details = snapshot.data()

            res.status(200).send(details);
        } else {
            res.status(404).send({ message: "No such details exist for the user." });
        }
    } catch (error) {
        console.error("Error fetching user details:", error.message);
        res.status(500).send({ message: "Error fetching user details." });
    }
})

app.get("/api/get-uid",async(req,res)=>{
    const sessionCookie = req.cookies.loginToken || ""; // Retrieve session cookie from client

    try {
        // Verify the session cookie and decode the claims
        const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true); // Enforce revocation check
        const uid = decodedClaims.uid; // Extract UID from the token
        res.status(200).send({ uid });
    } catch (error) {
        console.error("Error verifying session cookie:", error.message);
        res.status(401).send({ message: "Unauthorized. Invalid session cookie." });
}
})
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Genuity!")})
app.listen(port,()=>{
    console.log(`Listening at Port: ${port}`)
})



















