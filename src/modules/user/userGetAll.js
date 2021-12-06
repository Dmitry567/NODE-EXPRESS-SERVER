// WHEN SERVER IS WORKING WE CAN STORE SOME DATA IN IT 
// WHEN SERVER STOP WORKING DATA DISAPPEAR. WE STORE DATA IN DATABASE
const User = require("./Model");

function userGetAll(req, res) {
  User.find().exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("User get all error");
    });
  
}

module.exports = userGetAll;


