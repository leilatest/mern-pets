const posts = require("../../models/post");

module.exports = async (req, res) => {
  try {
    let { userId } = req.params;
    let Posts = await posts.find().populate("userId");
    res.status(200).json({ status: true, data: Posts });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
};
