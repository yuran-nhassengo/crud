const express = require('express');
const {fetch,createUser} = require("../controller/userController");

const route = express.Router();


route.get("/getAllUsers",fetch);

route.post("/create",createUser)


module.exports = route;