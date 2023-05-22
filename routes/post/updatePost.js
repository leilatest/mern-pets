const post = require("../../models/post");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    await post.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
    res.status(200).json({
      status: true,
      message: " Your information Post has been updated successfully",
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
    }
  }
};
