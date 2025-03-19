const express = require("express");
const multer = require("multer");
const { submitSellerData,additionalSellerData,getSellerDetails } = require("../controllers/seller.controller");

const router = express.Router();


// Route to handle submission of all data
router.post("/sellers",submitSellerData);

router.post("/sellers/:sellerId/details",additionalSellerData)

router.get("/seller/:sellerId",getSellerDetails)

module.exports = router;
