import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import moment from "moment";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [blogimage, setBlogImage] = useState(state?.img || "");
  const [category, setCategory] = useState(state?.category || "");

  const handleUpdate = async () => {
    await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/blogs/${state.id}`,
      {
        title,
        desc: value,
        category,
        img: blogimage,
      },
      {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    toast.success("Blog updated successfully!");
    navigate("/");
  };

  const handleAdd = async () => {
    await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/blogs/`,
      {
        title,
        desc: value,
        category,
        img: blogimage,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    toast.success("Blog created successfully!");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      state ? handleUpdate() : handleAdd();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="heading">Create Blog</h1>
      <div className="add">
        <div className="content">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h2>Publish</h2>

            <label className="imglink">Blog Image Link</label>
            <input
              type="text"
              placeholder="Image link here"
              value={blogimage}
              onChange={(e) => setBlogImage(e.target.value)}
            />
            <div className="buttons">
              <button onClick={handleSubmit}>
                {state ? "Update" : "Publish"}
              </button>
            </div>
          </div>
          <div className="item">
            <h2>Category</h2>
            <div className="cat">
              <input
                type="radio"
                checked={category === "art"}
                name="category"
                value="art"
                id="art"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={category === "science"}
                name="category"
                value="science"
                id="science"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={category === "technology"}
                name="category"
                value="technology"
                id="technology"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={category === "cinema"}
                name="category"
                value="cinema"
                id="cinema"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={category === "design"}
                name="category"
                value="design"
                id="design"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={category === "food"}
                name="category"
                value="food"
                id="food"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
