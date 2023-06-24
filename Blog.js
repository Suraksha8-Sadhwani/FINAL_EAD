import axios from "axios";
import React, { useState } from "react";

export default function BlogComponent(props) {
  const { image, description, title, _id } = props.data;
  const [modal, setModal] = useState(false);

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:8000/api/blogs/${id}`);
    setModal(false);
    props.getBlogs();
  };

  return (
    <div
      style={{
        borderRadius: "30px",
        height: "70px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="d-flex w-100 shadow" style={{ position: "relative" }}>
        <div className="d-flex">
          <div
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius: "50%",
              textAlign: "center",
              background: "lightgray",
            }}
          >
            <p style={{ fontSize: 25, fontWeight: "bold" }}>
              {title.charAt(0)}
            </p>
          </div>
          <div>
            <p style={{ fontSize: 25, fontWeight: "bold" }}>{title}</p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 17, fontWeight: "500", marginLeft: "80px" }}>
            URL: {url}
          </p>
        </div>
        <button
          type="button"
          class="btn"
          onClick={() => setModal(!modal)}
          style={{
            fontSize: 30,
            fontWeight: "bold",
            position: "absolute",
            right: 0,
          }}
        >
          :
        </button>
        {modal && (
          <div
            className="shadow"
            style={{
              position: "absolute",
              right: 0,
              bottom: -166,
              width: "170px",
              background: "white",
              zIndex: 2,
            }}
          >
            <div>
              <div
                className="text-center my-2 "
                onClick={() => {
                  deleteBlog(_id);
                }}
              >
                Delete
              </div>
              <div
                className="text-center my-2 "
                onClick={() => {
                  props.setEditModal(true);
                  props.setSelectedItem(props.data);
                  setModal(false);
                }}
              >
                Edit
              </div>

              <div className="text-center my-2 ">Copy</div>
              <div className="text-center my-2 ">Open in new tab</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
