const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  petName: {
    type: String,
    required: [true, "The user name is a required field"],
  },
  breed: {
    type: String,
    required: [true, "The user name is a required field"],
  },
  vaccination: {
    type: Date,
  },
  veterinarian: {
    type: String,
    required: [true, "The user name is a required field"],
  },
  age: {
    type: String,
    required: [true, "The user name is a required field"],
  },
  userImg: {
    type: String,
    default:
      "https://png.pngtree.com/element_our/png/20180926/pets-vector-logo-template-this-cat-and-dog-logo-could-be-png_113815.jpg",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = pet = mongoose.model("pet", petSchema);
