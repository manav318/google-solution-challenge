const admin=require("../index.js")

const signup=async(req,res)=>{
    const UserResponse=await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled:false,
    })
    res.json(UserResponse)
}


module.exports={signup}