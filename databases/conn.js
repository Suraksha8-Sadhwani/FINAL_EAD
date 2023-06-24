const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://surusadhwani:sachosatram@cluster0.cq1eded.mongodb.net/ead-prac")
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => console.log("Database Not Connected"));
