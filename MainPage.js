import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogComponent from "./Blog";
import EditModal from "./EditModal";
import AddBlogModal from "./AddBlogModal";

export default function MainPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    getFilteredBlogs();
  }, [search]);

  const getBlogs = async () => {
    const { data } = await axios.get("http://localhost:3000/api/blogs");
    setBlogs(data.data);
  };

  const getFilteredBlogs = () => {
    const filteredBlogs = blogs.filter((item) => item.title.includes(search));
    setBlogs(filteredBlogs);
  };

  return (
    <div
      className=" "
      style={{ width: "80%", height: "100%", padding: "200px" }}
    >
      {/* HEADER */}
      <div>
        <div class="mb-3 d-flex">
          <input
            type="text"
            class="form-control"
            name="blog"
            id="blog"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Blog By Title"
          />
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setAddModal(true)}
          >
            Add New Recipe
          </button>
        </div>
      </div>

      <AddBlogModal
        addModal={addModal}
        setAddModal={setAddModal}
        getBlogs={getBlogs}
      />
      <EditModal
        show={editModal}
        setEditModal={setEditModal}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        getBlogs={getBlogs}
      />
      {/* BODY */}
      <div className="w-100">
        {blogs.map((item) => (
          <BlogComponent
            data={item}
            getBlogs={getBlogs}
            setEditModal={setEditModal}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
    </div>
  );
}
