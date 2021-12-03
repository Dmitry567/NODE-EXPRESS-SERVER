const morgan = require("morgan");


module.exports.default = function logger(app) {
  app.use(morgan("dev"));
};