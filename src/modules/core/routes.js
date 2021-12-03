const infoRouter = require("../info/Routes");

module.exports.default = function routes(app) {
  app.use("/info", infoRouter);
};