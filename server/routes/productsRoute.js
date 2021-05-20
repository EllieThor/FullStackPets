const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/getProductsFromDb", productsController.getProductsFromDb);
router.post("/updateUnitsInDb", productsController.updateUnitsInDb);

module.exports = router;
