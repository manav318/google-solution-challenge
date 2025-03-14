const express=require("express")
const {signup}=require("../controllers/auth.controller")

const router=express.Router()

router.post('/api/auth/signup',signup)

module.exports=router

