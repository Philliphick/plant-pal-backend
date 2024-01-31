const mongoose = require('mongoose');
const Plants = require("../models/plantpal");

// const userSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   token: String,
//   userPlants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plants" }],
// })

// module.exports = mongoose.model('Users', userSchema)

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    token: String,
    userPlants: [{
      refId: { type: mongoose.Schema.Types.ObjectId, ref: "Plants" },
      lastWateredDate: Date
    }],
})

module.exports = mongoose.model("Users", userSchema);