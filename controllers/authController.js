
const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models/user");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const cors = require("cors");

exports.auth = async (req, res, next) => {
    console.log("arrived");
    console.log(req.body);
    const user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (!user) {
      return res.sendStatus(403);
    }
    if (req.body.password !== user.password) {
      console.log("wrong password");
      return res.sendStatus(403);
    }
    user.token = uuidv4();
    await user.save();
    res.send({ token: user.token });
}