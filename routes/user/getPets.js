const pets = require("../../models/pet");

module.exports = async (req, res) => {
  try {
    let { userId } = req.params;
    let Pets = await pets.find({ userId });
    res.status(200).json({ status: true, data: Pets });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
};
