const mongoose = require("mongoose");

module.exports.default = function dbConnect() {
  mongoose.connect("mongodb://localhost:27017/express", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // userCreateIndex: true,
    // userFindAndModify: false,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("CONNECTED");
  });

};

