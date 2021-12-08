const Router = require("express");
const userRegister = require("./userRegister");
const userGetAll = require("./userGetAll");
const userGetById = require("./userGetById");


const router = Router();

router.post("/", userRegister);// POST localhost:5000/user
router.get("/", userGetAll);// GET localhost:5000/get all users
router.get("/:userId", userGetById);// GET localhost:5000/61ae5bd58193deb92141e3ff


module.exports = router;