const express = require("express");
const router = express.Router();
const petsController = require("../controllers/petsController");

router.post("/getAllPets", petsController.getAllPets);
router.post("/insertNewPet", petsController.insertNewPet);
router.post("/updatePet", petsController.updatePet);
router.post("/deletePet", petsController.deletePet);

module.exports = router;
