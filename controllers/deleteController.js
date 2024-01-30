const createError = require("http-errors");
const axios = require("axios");
const Plants = require("../models/plantpal");


exports.deletePlant = async (req, res, next) => {
    try {
        const plantToDelete = await Plants.findByIdAndUpdate(req.params.id, {owned: false});
        if (!plantToDelete) {
          return next(createError(404, "no plant with that id"));
        }
        res.send({ result: true });
      } catch (err) {
        return next(createError(500, err.message));
      }
    
}