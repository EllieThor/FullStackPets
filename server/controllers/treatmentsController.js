const con = require("../utils/database");

// CREATE (treatments)
exports.insertNewTreatment = async (req, res) => {
  // `ID`, `PetId`, `VaccineId`, `createdAt`, `NextTreatment`;
  // FIXME: מחייב להכניס גם חיסון
  // let pets = await con.execute(`INSERT INTO treatments(PetId, ${req.body.VaccineId === "NULL" ? " " : "VaccineId,"} NextTreatment,VisitSummary) VALUES ('${req.body.PetId}' , ${req.body.VaccineId === "NULL" ? " " : "${req.body.VaccineId},"}'${req.body.NextTreatment}','${req.body.VisitSummary}')`);

  let pets = await con.execute(`INSERT INTO treatments(PetId, VaccineId, NextTreatment,VisitSummary) VALUES ('${req.body.PetId}','${req.body.VaccineId}','${req.body.NextTreatment}','${req.body.VisitSummary}')`);
  res.send(pets[0]);
};

// READ (treatments)
exports.getTreatments = async (req, res) => {
  let treatments = await con.execute(`SELECT treatments.ID,treatments.VisitSummary, treatments.createdAt, treatments.NextTreatment, pets.PetName, vaccines.VaccineName FROM treatments INNER JOIN pets ON treatments.PetId=pets.ID INNER JOIN vaccines On treatments.VaccineId=vaccines.ID WHERE PetId=${req.body.PetId} ORDER BY createdAt ASC`);
  res.send(treatments[0]);
};

// UPDATE (treatments)
