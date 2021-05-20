const con = require("../utils/database");

// READ (products)
exports.getProductsFromDb = async (req, res) => {
  let whichOrder = req.query.sortBy === "AtoZ" ? "DESC" : "ASC";
  // let whichColumn = sortStatus === "AtoZ" || sortStatus === "ZtoA" ? "name" : sortStatus === "created" ? "createdTime" : "updateTime";

  // let products = await con.execute(`SELECT * FROM products LEFT JOIN manufacturer ON products.ManufacturerID=manufacturer.ID ORDER BY Units ${whichOrder} `);
  let products = await con.execute(`SELECT products.ProductName, products.Price, products.Units, products.updatedAt,manufacturer.Name FROM products INNER JOIN manufacturer ON products.ManufacturerID=manufacturer.ID  `);
  // ORDER BY Units ${whichOrder}
  //  `ProductName`, `Price`, `ManufacturerID`, `Units`, `createdAt`, `updatedAt`;
  res.send(products[0]);
};

// UPDATE ( products)
exports.updateUnitsInDb = async (req, res) => {
  let plusOrMinus = req.body.type == 2 && req.body.Units > 0 ? "=Units-" : req.body.type == 2 && req.body.Units == 0 ? "=Units-1+" : "=Units+";

  let products = await con.execute(`UPDATE products SET Units${plusOrMinus}1  WHERE ID=${req.body.ID}`);
  res.send(products[0]);
};
