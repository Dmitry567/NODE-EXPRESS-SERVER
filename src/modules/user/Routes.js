const Router = require("express");
const userRegister = require("./userRegister");


const router = Router();

router.post("/", userRegister);// POST localhost:5000/user

module.exports = router;