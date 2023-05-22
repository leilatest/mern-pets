const posts = require("../../models/post");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let Posts = await posts.find({}).populate("userId",{"isAdmin":"true"});

    if ({"isAdmin":true}) {
      res.status(200).json({ status: true, data: Posts });
    } else {
      res.status(403).json({ status: false, message: "Access denied. You are not an admin." });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};



