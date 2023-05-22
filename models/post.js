const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "this information body is required"],
    },
    body: {
      type: String,
      required: [true, "this information body is required"],
    },
    img: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/3959/3959425.png",
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = post = mongoose.model("post", postSchema);
