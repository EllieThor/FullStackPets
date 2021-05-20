const express = require("express");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
var mysql = require("mysql2");
const con = require("./utils/database");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors(corsOptions));

const Pets = require("./routes/petsRoute");
app.use("/pets", Pets);

const PetsParents = require("./routes/PetsParentsRoute");
app.use("/petsParents", PetsParents);

const Vaccines = require("./routes/vaccinesRoute");
app.use("/vaccines", Vaccines);

const Treatments = require("./routes/treatmentsRoute");
app.use("/treatments", Treatments);

app.listen(5004);
