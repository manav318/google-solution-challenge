const {admin,db,bucket}=require("../lib/firebase.js")

const cookieOptions = {
    httpOnly: true, // Prevents JavaScript access to cookies
    secure: true, // Ensures cookies are sent only over HTTPS
    maxAge: 24 * 60 * 60 * 1000, // 1 day
};


const signup=async (req,res)=>{
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
}

const login=async (req, res) => {
    const { idToken } = req.body; // Get ID token from the client
    try {
        // Verify the ID token
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        if(!decodedToken)
            res.status(401).send({ message: "Sign-In failed", error: error.message });
        const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn: cookieOptions.maxAge });
        res.cookie("session", sessionCookie, cookieOptions); // Set session cookie
        res.send({ message: "Sign-In successful!" });
    } catch (error) {
        res.status(401).send({ message: "Sign-In failed", error: error.message });
    }
};

const logout=(req, res) => {
    res.clearCookie("session", { httpOnly: true, secure: true });
    res.status(200).send({ message: "Logged out successfully, session cookie cleared." });
};

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

const protected=(req,res)=>{
    res.send({ message: `Hello, ${req.user.email}. You are authorized.` });
}




module.exports={signup,login,logout,protected,verifySession}