const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String
})

module.exports = mongoose.model('Users', userSchema)