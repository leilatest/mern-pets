const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "The UserName is a required field"],
  },
  email: {
    type: String,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Invalid e-mail",
      "The e-mail is a required field",
    ],
  },
  password: {
    type: String,

    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
      "password must contain a  minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    ],
  },
  phone: {
    type: String,
    required: [true, "The phone  is a required field"],
  },

  address: {
    type: String,
    required: [true, "The address is a required field"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "pet",
  },
  userImg: {
    type: String,
    default:
      "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
  },
  isUser: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = user = mongoose.model("user", userSchema);
