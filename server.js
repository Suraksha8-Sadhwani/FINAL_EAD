require("./database/conn");

const express = require("express");
const BlogModel = require("./model/blog.model");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());


//Create
app.post("/api/blogs", async (req, res) => {
  const response = await BlogModel.create(req.body);
  res.status(200).send({ message: "Blog Created", data: response });

  try {
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

//Read
app.get("/api/blogs", async (req, res) => {
    const response = await BlogModel.find({});
    res.status(200).send({ message: "All Blogs", data: response });
  
    try {
    } catch (error) {
      res.status(500).send({ message: error });
    }
  });
  

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
