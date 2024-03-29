const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5050;
const mongoose = require("mongoose");
const { Plantpal } = require("./models/plantpal");
const { User } = require("./models/user");
const { v4: uuidv4 } = require("uuid");
const router = require("./routes/plantRoutes");

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Plants Connected to MongoDB"))
    .catch((err) => console.log(err));


const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

// Authorization middleware
app.use(async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const user = await User.findOne({ token: authHeader });
    if (user) {
      next();
    } else {
      res.sendStatus(403);
    }
});