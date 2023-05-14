const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  petName: {
    type: String,
    required: [true, "please provide a pet name"],
  },
  breed: {
    type: String,
    required: [true, "please provide a pet breed"],
  },

  vaccination: {
    type: String,
    required: [true, "please provide a information about the vaccination"],
  },
  grooming: {
    type: String,
    required: [true, "Give the last date for your pet grooming, please."],
  },
  veterinarian: {
    type: String,
    required: [true, "please provide a veterinarian name "],
  },
  age: {
    type: String,
    required: [true, "please provide a age"],
  },
  petImg: {
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
