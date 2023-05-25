const pet = require("../../models/adoption");
module.exports = async (req, res) => {
  try {
    let { userId } = req.params;
    let { type, petName, breed, gender, vaccination, age, petImg } = req.body;

    let newPet = new pet({
      type,
      petName,
      breed,
      gender,
      vaccination,
      age,
      petImg,
      userId,
    });
    await newPet.save();
    res.status(200).json({
      status: true,
      message: " Your new Pet has been created successfully",
    });
  } catch (error) {
    if (error.errors.type) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.type.message });
    } else if (error.errors.petName) {
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
    } else if (error.errors.gender) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.gender.message });
    } else if (error.errors.age) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.age.message });
    } else if (error.errors.petImg) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.petImg.message });
    } else if (error.errors.userId) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.userId.message });
    }
  }
};
