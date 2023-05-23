const { singUp } = require("./users.controller");

const usersRoutes = require("express").Router();

usersRoutes.post("/", singUp);

module.exports = usersRoutes;