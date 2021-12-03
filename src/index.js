const express = require("express");
const home = require("./home");
const info = require("./info");
const errorHandler = require("./errorHandler");
const { default: logger } = require("./logger");
const { default: parseResponse } = require("./bodyParser");
const { default: cors } = require("./cors");



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
