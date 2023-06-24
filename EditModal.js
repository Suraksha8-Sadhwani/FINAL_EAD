import axios from "axios";
import React, { useState } from "react";

export default function EditModal({
  show,
  setEditModal,
  selectedItem,
  setSelectedItem,
  getBlogs,
}) {
  const updateBlog = async () => {
    await axios.patch(`http://localhost:8000/api/blogs/${selectedItems._id}`, {
      title,
      url,
    });
  };

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  return (
    show && (
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
          <p className="display-6 my-1">Edit Bookmark </p>
          <p className=" my-1">bookmark id: {selectedItem._id} </p>
          <p
            className="btn btn-secondary"
            style={{ position: "absolute", right: 10, top: 2 }}
            onClick={() => {
              setEditModal(false);
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
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              aria-describedby="helpId"
              placeholder="URL"
            />

            <button
              type="button"
              class="btn btn-primary "
              onClick={() => {
                updateBlog();
                setEditModal(false);
                getBlogs();
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    )
  );
}
