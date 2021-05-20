const express = require("express");
const router = express.Router();
const petsParentsController = require("../controllers/PetsParentsController");

router.post("/insertNewPetParent", petsParentsController.insertNewPetParent);
router.get("/getAllPetsParents", petsParentsController.getAllPetsParents);
router.post("/updatePetParent", petsParentsController.updatePetParent);
router.post("/deletePetParent", petsParentsController.deletePetParent);

module.exports = router;
