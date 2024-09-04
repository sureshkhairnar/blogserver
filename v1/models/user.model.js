const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    minlength: 10,
    maxlength: 100,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
