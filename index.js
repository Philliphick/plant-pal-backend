const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { Plantpal } = require("./models/plantpal");

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Plants Connected to MongoDB"))
    .catch((err) => console.log(err));


    const app = express();

    app.use(cors());
    app.use(express.json());

app.listen(5050, () => {
    console.log("Server started on port 5050");
})