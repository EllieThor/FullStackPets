const con = require("../utils/database");

// CREATE(petsparents);
exports.insertNewPetParent = async (req, res) => {
  let pet = await con.execute(`INSERT INTO petsparents(PetName, PetType, DateOfBirth) VALUES ('${req.body.PetName}','${req.body.PetType}','${req.body.DateOfBirth}')`);
  // let pet = await con.execute(`INSERT INTO pets(PetName, PetType, PetparentId, DateOfBirth) VALUES ('${req.body.PetName}','${req.body.PetType}','${req.body.PetparentId}','${req.body.DateOfBirth}')`);
  //   `ID`, ParentName
  res.send(pet[0]);
};

// READ (petsparents)
exports.getAllPetsParents = async (req, res) => {
  //   let whichOrder = req.body.sortBy === "AtoZ" ? "ASC" : "DESC";
  //   let whichColumn = req.body.sortBy === "AtoZ" || req.body.sortBy === "ZtoA" ? "PetName" : req.body.sortBy === "createdAt" ? "createdAt" : "updatedAt";
  //   let pets = await con.execute(`SELECT pets.ID, pets.PetName, pets.PetType, pets.PetparentId, pets.DateOfBirth, pets.createdAt, pets.updatedAt, petsparents.ParentName FROM pets INNER JOIN petsparents ON pets.PetparentId = petsparents.ID WHERE  ${req.body.typeToFilterBy} LIKE '%${req.body.searchBy}%' ORDER BY ${whichColumn} ${whichOrder}  `);
  let petsparents = await con.execute(`SELECT * FROM petsparents `);
  // console.log("petsparents result: ", petsparents[0]);
  res.send(petsparents[0]);
};

// UPDATE (petsparents)
exports.updatePetParent = async (req, res) => {
  let pet = await con.execute(`UPDATE petsparents SET PetName='${req.body.PetName}' WHERE ID=${req.body.ID}`);
  res.send(pet[0]);
};

// DELETE (petsparents)
exports.deletePetParent = async (req, res) => {
  let pet = await con.execute(`DELETE petsparents pets WHERE ID=${req.body.ID} `);
  res.send(pet[0]);
};
