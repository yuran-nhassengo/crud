const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express()

app.use(express.json());

const port = process.env.PORT;

const MONGOURL = process.env.MONGO_URL;



mongoose.connect(MONGOURL).then(() =>{
    console.log("Database connected successful.")
    app.listen(port, () =>{
            console.log(`Server is running on http://localhost:${port}`)
    })
}).catch((err) =>console.log(err));

app.use("/api/users",require("./routes/userRoute"))