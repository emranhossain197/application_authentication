const express = require("express");
const lib = require("../service/index");
const route = express.Router();
const method = require("../controllers/controller");

route.get("/", lib.home);

route.get("/login", lib.login);

route.get("register", lib.register);

// API
route.post("/register", method.register);
route.post('/login', method.login)

module.exports = route;
