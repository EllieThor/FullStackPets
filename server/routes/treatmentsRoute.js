const express = require("express");
const router = express.Router();
const treatmentsController = require("../controllers/treatmentsController");

router.post("/getTreatments", treatmentsController.getTreatments);
router.post("/insertNewTreatment", treatmentsController.insertNewTreatment);

module.exports = router;
