const express = require("express");
const home = require("./modules/home/home");
const info = require("./modules/info/info");
const errorHandler = require("./modules/core/errorHandler");
const { default: logger } = require("./modules/core/logger");
const { default: parseResponse } = require("./modules/core/bodyParser");
const { default: cors } = require("./modules/core/cors");



const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
cors(app);
app.get("/", home);// GET localhost:5000
app.get("/info", info); // GET localhost:5000/info


errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
