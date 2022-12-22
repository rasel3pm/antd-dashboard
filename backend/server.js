const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/config");
// const { default: mongoose } = require("mongoose");
const router = require("./routes/index");
require("colors");

dotenv.config();

//rest object
const app = express();

//middlewear
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

connectDB();
const port = process.env.PORT || 8080;

//listen
app.listen(port, () => {
  console.log(`Server is runnig on port ${port}`.bgCyan.white);
});
