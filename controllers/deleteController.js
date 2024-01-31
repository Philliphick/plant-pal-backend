const createError = require("http-errors");
const axios = require("axios");
const Users = require("../models/user");
const Plants = require("../models/plantpal");


exports.deletePlant = async (req, res, next) => {
    const { username, id } = req.params;
    try {
        await Users.findOneAndUpdate(
          { token: username },
          { $pull: { userPlants: { refId : id } } },
          { safe: true, multi: false }
        );
        res.send("Plant deleted successfully");
    } catch (err) {
        return next(createError(500, err.message));
    }
}