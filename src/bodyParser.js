const bodyParser = require("body-parser");


module.exports.default = function parseResponse(app){
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};