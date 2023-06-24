import axios from "axios";
import React, { useState } from "react";

export default function AddBlogModal({ addModal, setAddModal, getBlogs }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addBlog = async () => {
    await axios.post(`http://localhost:8000/api/blogs`, {
      title,
      description,
      ingeridients,
      instructions
    });
  };
  return (
    addModal && (
      <div
        style={{
          position: "absolute",
          left: "34%",
          background: "white",
          zIndex: 3,
          top: 50,
          width: "400px",
          borderRadius: "20px",
          padding: "100px",
        }}
        className="shadow"
      >
        <div className="text-center">
          <p className="display-6 my-1">Add Bookmark </p>

          <p
            className="btn btn-secondary"
            style={{ position: "absolute", right: 10, top: 2 }}
            onClick={() => {
              setAddModal(false);
            }}
          >
            Back
          </p>
        </div>

        <div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control my-3"
              name=""
              id=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              aria-describedby="helpId"
              placeholder="Title"
            />
            <input
              type="text"
              class="form-control my-3"
              name=""
              id=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              aria-describedby="helpId"
              placeholder="URL"
            />
             <input
              type="text"
              class="form-control my-3"
              name=""
              id=""
              value={ingeridients}
              onChange={(e) => setIngeridients(e.target.value)}
              aria-describedby="helpId"
              placeholder="URL"
            />
             <input
              type="text"
              class="form-control my-3"
              name=""
              id=""
              value={instructions}
              onChange={(e) => setInstruction(e.target.value)}
              aria-describedby="helpId"
              placeholder="URL"
            />

            <button
              type="button"
              class="btn btn-primary "
              onClick={() => {
                // updateBlog();
                addBlog();
                setAddModal(false);
                getBlogs();
              }}
            >
              Add Recipe
            </button>
          </div>
        </div>
      </div>
    )
  );
}
