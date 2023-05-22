const post = require("../../models/post");

module.exports = async (req, res) => {
  try {
    let Post = await post.find();
    res.status(200).json({ status: true, data: Post });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
};
