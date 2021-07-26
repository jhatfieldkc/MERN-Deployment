const Pet = require("../models/pet.models");

//Create
module.exports.createOne = (req, res) => {
  Pet.create(req.body)
    .then((addPet) => res.json(addPet))
    .catch((err) =>
      res.json({ message: "Something went wrong adding pet", error: err })
    );
};
//Read All
module.exports.findAll = (req, res) => {
  Pet.find()
    .sort({ type: 1 })
    .then((allPets) => res.json(allPets))
    .catch((err) =>
      res.json({
        message: "Something went wrong finding all pets",
        error: err,
      })
    );
};

//Read One
module.exports.findOnePet = (req, res) => {
  Pet.findOne({ _id: req.params._id })
    .then((onePet) => res.json(onePet))
    .catch((err) =>
      res.json({ message: "Something went wrong finding one pet", error: err })
    );
};

//Update
module.exports.updateOnePet = (req, res) => {
  Pet.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
    .then((onePet) => res.json(onePet))
    .catch((err) =>
      res.json({
        message: "Something went wrong updating one pet",
        error: err,
      })
    );
};

//Delete
module.exports.deleteOnePet = (req, res) => {
  Pet.deleteOne({ _id: req.params._id })
    .then(res.json({ message: "Pet deleted" }))
    .catch((err) =>
      res.json({
        message: "Something went wrong deleting one pet",
        error: err,
      })
    );
};
