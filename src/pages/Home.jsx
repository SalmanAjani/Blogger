import Categories from "../components/Categories";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const category = useLocation().search;
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/blogs${category}`
      );
      setBlogs(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [category]);

  if (isLoading) {
    return <h1>Loading.. Please wait, it might take a while.</h1>;
  }

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
