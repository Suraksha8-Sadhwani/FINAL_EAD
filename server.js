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

//Read Specific
app.get("/api/blogs/:id", async (req, res) => {
    const { id } = req.params;
    const response = await BlogModel.findById(id);
    res.status(200).send({ message: "Specific Blog", data: response });
  
    try {
    } catch (error) {
      res.status(500).send({ message: error });
    }
  });
  
  //Update Specific
  app.patch("/api/blogs/:id", async (req, res) => {
    const { id } = req.params;
    await BlogModel.updateOne({ _id: id }, req.body);
  
    let response = await BlogModel.findById(id);
  
    res.status(200).send({ message: "Updated Blog", data: response });
  
    try {
    } catch (error) {
      res.status(500).send({ message: error });
    }
  });

//Delete Blog
app.delete("/api/blogs/:id", async (req, res) => {
    const { id } = req.params;
  
    var response = await BlogModel.findById(id);
  
    if (!response) {
      return res.status(401).send({ message: "No such blog found" });
    }
  
    response = await BlogModel.deleteOne({ _id: id });
    res.status(200).send({ message: "Deleted Blog", data: response });
  
    try {
    } catch (error) {
      res.status(500).send({ message: error });
    }
  });

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
