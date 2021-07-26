const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pet Name is required"],
      minlength: [3, "Name not long enough"],
      // unique: [true, "Pet with that name already exists"],
    },
    type: {
      type: String,
      required: [true, "Type of pet is required"],
      minlength: [3, "Type not long enough"],
    },
    description: {
      type: String,
      required: [true, "A description is required"],
      minlength: [3, "Description not long enough"],
    },
    skillOne: {
      type: String,
    },
    skillTwo: {
      type: String,
    },
    skillThree: {
      type: String,
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
