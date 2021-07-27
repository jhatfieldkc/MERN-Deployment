const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  //create
  app.post("/api/pet/create", PetController.createOne);
  //read All
  app.get("/api/pet", PetController.findAll);
  //read one
  app.get("/api/pet/:_id", PetController.findOnePet);
  //update
  app.put("/api/pet/update/:_id", PetController.updateOnePet);
  //delete
  app.delete("/api/pet/delete/:_id", PetController.deleteOnePet);
};
