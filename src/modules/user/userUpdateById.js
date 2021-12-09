
const User = require("./Model");

function userUpdateById(req, res) {

  const userId = req.params.userId;

  delete req.body.password;// Preventing change password by using Postman
  //delete req.body.roles;//For in case if user want use different roles

  User.updateOne( { _id: userId }, req.body)//findByIdAndUpdate
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("User update error");
    });
  
}

module.exports = userUpdateById;


