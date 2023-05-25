const pets = require("../../models/adoption");

module.exports = async (req, res) => {
  try {
    let Pets = await pets.find();
    res.status(200).json({ status: true, data: Pets });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
};
