const pet = require("../../models/pet");
module.exports = async (req, res) => {
  try {
    let {
      petName,
      breed,
      vaccination,
      grooming,
      veterinarian,
      age,
      petImg,
      userId,
    } = req.body;

    let newPet = new pet({
      petName,
      breed,
      vaccination,
      grooming,
      veterinarian,
      age,
      petImg,
      userId,
    });
    await newPet.save();
    res.status(200).json({
      status: true,
      message: "successfully",
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
    } else if (error.errors.veterinarian) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.veterinarian.message });
    } else if (error.errors.age) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.age.message });
    } else if (error.errors.userImg) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.userImg.message });
    } else if (error.errors.userId) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.userId.message });
    }
  }
};
