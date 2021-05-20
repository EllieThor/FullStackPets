const express = require("express");
const router = express.Router();
const vaccinesController = require("../controllers/vaccinesController");

router.get("/getVaccines", vaccinesController.getVaccines);

module.exports = router;
