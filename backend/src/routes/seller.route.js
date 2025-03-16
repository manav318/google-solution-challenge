const express = require("express");
const multer = require("multer");
const { submitSellerData,additionalSellerData } = require("../controllers/seller.controller");

const router = express.Router();


// Route to handle submission of all data
router.post("/sellers",submitSellerData);

router.post("/sellers/:sellerId/details",additionalSellerData)

module.exports = router;
