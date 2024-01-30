const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String,
  userPlants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plants" }],
})

module.exports = mongoose.model('Users', userSchema)