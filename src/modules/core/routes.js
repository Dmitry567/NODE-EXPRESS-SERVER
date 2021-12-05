const infoRouter = require("../info/Routes");
const userRouter = require("../user/Routes");

module.exports.default = function routes(app) {
  app.use("/info", infoRouter);
  app.use("/user", userRouter);
};