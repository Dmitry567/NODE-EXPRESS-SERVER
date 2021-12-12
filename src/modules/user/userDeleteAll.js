// WHEN SERVER IS WORKING WE CAN STORE SOME DATA IN IT 
// WHEN SERVER STOP WORKING DATA DISAPPEAR. WE STORE DATA IN DATABASE
const User = require("./Model");

function userDeleteAll(req, res) {

  User.deleteMany( )// We can use find() to find particular data Example: email{email: "hot@gmail.com"}
    .limit()
    .skip()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("User delete all error");
    });
  
}

module.exports = userDeleteAll;


