const User = require("../../models/user");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findById(id).select(" -password");
    res.status(200).json({ status: true, data: user });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
};
