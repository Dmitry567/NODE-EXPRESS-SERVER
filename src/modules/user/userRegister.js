// WHEN SERVER IS WORKING WE CAN STORE SOME DATA IN IT 
// WHEN SERVER STOP WORKING DATA DISAPPEAR. WE STORE DATA IN DATABASE
const User = require("./Model");

function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,

  });

  newUser.save();

  res.status(200).json("userRegister here");
  
}

module.exports = userRegister;


