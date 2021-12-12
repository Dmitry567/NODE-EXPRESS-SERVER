const Router = require("express");
const userRegister = require("./userRegister");
const userGetAll = require("./userGetAll");
const userGetById = require("./userGetById");
const userUpdateById = require("./userUpdateById");
const userDeleteById = require("./userDeleteById ");
const userDeleteAll = require("./userDeleteAll");



const router = Router();

router.post("/", userRegister);// POST localhost:5000/user
router.get("/", userGetAll);// GET localhost:5000/get all users
router.get("/:userId", userGetById);// GET localhost:5000/61ae5bd58193deb92141e3ff
router.patch("/:userId", userUpdateById);// PATCH localhost:5000/61ae5bd58193deb92141e3ff
router.delete("/:userId", userDeleteById);// DELETE localhost:5000/61ae5bd58193deb92141e3ff
router.delete("/", userDeleteAll);// DELETE localhost:5000/user

module.exports = router;