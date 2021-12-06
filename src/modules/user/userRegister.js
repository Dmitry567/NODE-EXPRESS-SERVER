// WHEN SERVER IS WORKING WE CAN STORE SOME DATA IN IT 
// WHEN SERVER STOP WORKING DATA DISAPPEAR. WE STORE DATA IN DATABASE
const User = require("./Model");

function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,

  });

  newUser
    .save()
    .then(() => {
      res.status(200).json("User Created");
    })
    .catch((error) => {
      console.log(error);
      res.status(200).json("User Not Created");
    })
    .finally(() => {
      console.log("END");// IT IS NO NEED TO PUT CONSOLE LOG IN FINALLY AND USE FINALLY
    });  
  
}

module.exports = userRegister;


