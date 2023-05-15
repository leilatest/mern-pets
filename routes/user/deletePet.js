const pet = require("../../models/pet");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    await pet.findByIdAndDelete(id);
    res.status(200).json({
      status: true,
      message: " Your Pet has been delete successfully",
    });
  }  catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  } }