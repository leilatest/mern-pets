const pet = require("../../models/pet");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    await pet.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
    res
      .status(200)
      .json({
        status: true,
        message: " Your information Pet has been updated successfully",
      });
  } catch (error) {
    if (error.errors.petName) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.petName.message });
    } else if (error.errors.breed) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.breed.message });
    } else if (error.errors.vaccination) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.vaccination.message });
    } else if (error.errors.grooming) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.grooming.message });
    } else if (error.errors.age) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.age.message });
    } else if (error.errors.petImg) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.petImg.message });
    }
  }
};
