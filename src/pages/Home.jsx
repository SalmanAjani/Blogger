import Categories from "../components/Categories";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

const Home = () => {
  const category = useLocation().search;
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/blogs${category}`);
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [category]);

  return (
    <div>
      <Categories />
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <div className="img">
              <img src={blog.img} alt="blog" />
            </div>
            <div className="content">
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
              </Link>
              <p>{getText(blog.desc)}</p>
              <Link to={`/blogs/${blog.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
