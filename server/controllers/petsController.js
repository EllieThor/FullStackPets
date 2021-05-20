const con = require("../utils/database");

// CREATE (pets)
exports.insertNewPet = async (req, res) => {
  if (req.body.isItParentExists === 2) {
    let parent = await con.execute(`INSERT INTO petsparents(ParentName) VALUES ('${req.body.newPetParentName}')`);
    console.log("NewParentID!!! ", parent[0].insertId);
    let pet = await con.execute(`INSERT INTO pets(PetName, PetType, PetparentId, DateOfBirth) VALUES ('${req.body.PetName}','${req.body.PetType}','${parent[0].insertId}','${req.body.DateOfBirth}')`);
    res.send(pet[0]);
  } else {
    let pet = await con.execute(`INSERT INTO pets(PetName, PetType, PetparentId, DateOfBirth) VALUES ('${req.body.PetName}','${req.body.PetType}','${req.body.petParentID}','${req.body.DateOfBirth}')`);
    res.send(pet[0]);
  }
};

// READ (pets)
exports.getAllPets = async (req, res) => {
  let whichOrder = req.body.sortBy === "AtoZ" ? "ASC" : "DESC";
  let whichColumn = req.body.sortBy === "AtoZ" || req.body.sortBy === "ZtoA" ? "PetName" : req.body.sortBy === "createdAt" ? "createdAt" : "updatedAt";
  // let pets = await con.execute(`SELECT * FROM pets WHERE  ${req.body.typeToFilterBy} LIKE '%${req.body.searchBy}%' ORDER BY ${whichColumn} ${whichOrder} `);
  let pets = await con.execute(`SELECT pets.ID, pets.PetName, pets.PetType, pets.PetparentId, pets.DateOfBirth, pets.createdAt, pets.updatedAt, petsparents.ParentName FROM pets INNER JOIN petsparents ON pets.PetparentId = petsparents.ID WHERE  ${req.body.typeToFilterBy} LIKE '%${req.body.searchBy}%' ORDER BY ${whichColumn} ${whichOrder}  `);
  console.log("result: ", pets[0]);
  res.send(pets[0]);
};

// UPDATE (pets)
exports.updatePet = async (req, res) => {
  let pet = await con.execute(`UPDATE pets SET PetName='${req.body.PetName}' WHERE ID=${req.body.ID}`);
  res.send(pet[0]);
};

// DELETE (pets)
exports.deletePet = async (req, res) => {
  let pet = await con.execute(`DELETE FROM pets WHERE ID=${req.body.ID} `);
  res.send(pet[0]);
};
