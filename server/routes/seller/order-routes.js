const express = require("express");

const {
  getAllOrdersOfSeller,
  getOrderDetailsForSeller,
  updateOrderStatusBySeller,
} = require("../../controllers/seller/order-controller");

const router = express.Router();

router.get("/get/:sellerId", getAllOrdersOfSeller);
router.get("/details/:id", getOrderDetailsForSeller);
router.put("/update/:id", updateOrderStatusBySeller);

module.exports = router;
