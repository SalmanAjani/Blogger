import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = ({ category }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/blogs/?category=${category}`
      );
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [category]);

  return (
    <div className="menu">
      <h2>Other blogs you may like</h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <img src={blog.img} alt="blogimage" />
          <h3>{blog.title}</h3>
          <Link to={`/blogs/${blog.id}`}>
            <button>Read more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
