const express = require('express');
const {fetch,createUser,update ,deleteUser} = require("../controller/userController");

const route = express.Router();


route.get("/getAllUsers",fetch);

route.post("/create",createUser)

route.put("/update/:id",update);

route.delete("/delete/:id",deleteUser)


module.exports = route;