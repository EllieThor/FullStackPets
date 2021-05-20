const con = require("../utils/database");

// READ (vaccines)
exports.getVaccines = async (req, res) => {
  let vaccines = await con.execute(`SELECT * FROM vaccines`);
  res.send(vaccines[0]);
};

// UPDATE ( vaccines)
