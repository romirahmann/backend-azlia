var express = require("express");
var router = express.Router();

const UserController = require("./../../controller/master_controller/UsersController");

// USER CONTROLLER
router.get("/users", UserController.getAllUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/user", UserController.register);
router.put("/user/:id", UserController.updateUser);
router.get("/roles", UserController.getAllRole);

module.exports = router;
