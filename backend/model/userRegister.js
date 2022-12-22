const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
