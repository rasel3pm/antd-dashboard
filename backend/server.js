const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/config");
const router = require("./routes/index");
// const cloudinary = require("cloudinary");
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
// cloudinary.config({
//   cloud_name: "dy0nenwvk",
//   api_key: "942357739641819",
//   api_secret: "2CaC2dOHU-n8x6sl85kvfQoHhHs",
// });

const port = process.env.PORT || 8080;

//listen
app.listen(port, () => {
  console.log(`Server is runnig on port ${port}`.bgCyan.white);
});
