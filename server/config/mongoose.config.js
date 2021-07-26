const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/exam2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecting with teh mongoose"))
  .catch((err) => console.log("Not connected with the mongoose", err));
