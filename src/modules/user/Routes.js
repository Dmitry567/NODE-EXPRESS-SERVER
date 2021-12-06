const Router = require("express");
const userRegister = require("./userRegister");
const userGetAll = require("./userGetAll");


const router = Router();

router.post("/", userRegister);// POST localhost:5000/user
router.get("/", userGetAll);// GET localhost:5000/get all users


module.exports = router;