const post = require("../../models/post");
module.exports = async (req, res) => {
  try {
    let { userId } = req.params;
    let { title, body, img } = req.body;

    let newPost = new post({
      title,
      body,
      img,
      userId,
    });
    await newPost.save();
    res.status(200).json({
      status: true,
      message: " Your post has been created successfully",
    });
  } catch (error) {
    if (error.errors.title) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.title.message });
    } else if (error.errors.body) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.body.message });
    } else if (error.errors.userId) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.userId.message });
    }
  }
};
