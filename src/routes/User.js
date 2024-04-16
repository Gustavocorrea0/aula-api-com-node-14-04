const express = require("express");
const routes = express.Router();

const UserController = require("../controller/UserController")

routes.get("/users" , UserController.all);
routes.post("/users" , UserController.create);
routes.put("/users" , UserController.update);
routes.delete("/users" , UserController.delete);

module.exports = routes;