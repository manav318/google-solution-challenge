const { admin } = require("./lib/firebase");
const db = admin.firestore();

const authRoutes=require("./routes/auth.route")
const sellerRoutes=require("./routes/seller.route")


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

app.listen(port,()=>{
    console.log(`Listening at Port: ${port}`)
})



















