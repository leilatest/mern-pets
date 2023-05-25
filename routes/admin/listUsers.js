const users = require("../../models/user");

module.exports = async (req, res) => {
  try {
    let { userId } = req.params;
    let Users = await users.find({ "isUser": true})
    res.status(200).json({ status: true, data: Users });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
};
