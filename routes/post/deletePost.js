const post = require("../../models/post");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    await post.findByIdAndDelete(id);
    res.status(200).json({
      status: true,
      message: " Your Post has been delete successfully",
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
