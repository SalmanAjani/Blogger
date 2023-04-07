import { Link, useLocation } from "react-router-dom";
import Categories from "../components/Categories";
import { useState, useEffect } from "react";
import axios from "axios";

// const blogs = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 4,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ];

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const category = useLocation().search;
  // console.log(category);

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
