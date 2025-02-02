const express = require("express");

const {
    getAllOrdersOfSeller,
    getOrderDetailsForSeller,
} = require("../../controllers/seller/order-controller");

const router = express.Router();

router.get("/get/:sellerId", getAllOrdersOfSeller);
router.get("/details/:id", getOrderDetailsForSeller);

module.exports = router;