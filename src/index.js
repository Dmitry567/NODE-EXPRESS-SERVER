const express = require("express");
//const home = require("./modules/home/home");
//const info  = require("./modules/info/info");
const errorHandler = require("./modules/core/errorHandler");
const { default: logger } = require("./modules/core/logger");
const { default: parseResponse } = require("./modules/core/bodyParser");
const { default: cors } = require("./modules/core/cors");
const { default: routes } = require("./modules/core/routes");
const { default: dbConnect } = require("../src/modules/core/db");



const app = express();
const PORT = 5000;

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
// app.get("/", home);// GET localhost:5000
//app.post("/info", info); // GET localhost:5000/info


errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
