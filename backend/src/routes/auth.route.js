const express=require("express")
const {signup,login, logout, protected, verifySession}=require("../controllers/auth.controller")

const router=express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)

router.get('/protected',verifySession,protected)




module.exports=router

