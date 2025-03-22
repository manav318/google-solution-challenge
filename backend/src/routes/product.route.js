const express=require("express")
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const {addProduct, getSpecificProduct, getAllProducts, updateSpecificProduct, deleteSpecificProduct}= require("../controllers/product.controller")

const router=express.Router()

router.post("/",upload.fields([{ name: "mainPhoto" }, { name: "referencePhoto" }]),addProduct)

router.get("/",getAllProducts)

router.get("/:id",getSpecificProduct)

router.put("/:id",upload.fields([{ name: "mainPhoto" }, { name: "referencePhoto" }]),updateSpecificProduct)

router.delete("/:id",deleteSpecificProduct)

module.exports= router