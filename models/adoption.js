const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adoptionSchema = new Schema({
  type: {
    type: String,
    required: [true, "please provide a type"],
  },
  petName: {
    type: String,
    required: [true, "please provide a pet name"],
  },
  breed: {
    type: String,
    required: [true, "please provide a pet breed"],
  },

  gender: {
    type: String,
    required: [true, "please provide a pet gender"],
  },
  vaccination: {
    type: String,
    required: [true, "please provide a information about the vaccination"],
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

module.exports = adoption = mongoose.model("adoption", adoptionSchema);
