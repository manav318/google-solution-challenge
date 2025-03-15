
const express = require('express');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const port=7000

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}
const app = express();


app.use(express.json())
app.use(cookieParser())

app.use(cors(corsOptions)) 

app.listen(port,()=>{
    console.log(`Listening at Port: ${port}`)
})



const cookieOptions = {
    httpOnly: true, // Prevents JavaScript access to cookies
    secure: true, // Ensures cookies are sent only over HTTPS
    maxAge: 24 * 60 * 60 * 1000, // 1 day
};



const admin=require("firebase-admin")
const credentials=require("./firebaseService.json")

admin.initializeApp({credential:admin.credential.cert(credentials)})

app.post("/api/auth/signup",async (req,res)=>{
    const { email, password } = req.body;
    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
        });
        
        res.status(201).send(userRecord);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


app.post("/api/auth/login", async (req, res) => {
    const { idToken } = req.body; // Get ID token from the client
    try {
        // Verify the ID token
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn: cookieOptions.maxAge });
        res.cookie("session", sessionCookie, cookieOptions); // Set session cookie
        res.send({ message: "Sign-In successful!" });
    } catch (error) {
        res.status(401).send({ message: "Sign-In failed", error: error.message });
    }
});


const verifySession = async (req, res, next) => {
    const sessionCookie = req.cookies.session;
    if (!sessionCookie) {
        return res.status(401).send({ message: "Unauthorized. No session cookie found." });
    }
    try {
        const decodedToken = await admin.auth().verifySessionCookie(sessionCookie, true);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).send({ message: "Invalid or expired session cookie.", error: error.message });
    }
};

app.post("/api/auth/logout", (req, res) => {
    res.clearCookie("session", { httpOnly: true, secure: true });
    res.status(200).send({ message: "Logged out successfully, session cookie cleared." });
});







