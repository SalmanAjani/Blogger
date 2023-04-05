import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/AuthContextProvider";

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(blog.username);
  // console.log(currentUser.username);

  const location = useLocation();
  const blogId = location.pathname.split("/")[2]; // blog id is at index 2 in the url localhost:4000/blogs/:id

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/blogs/${blogId}`);
      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const handleDelete = async () => {
    try {
      await axios
        .delete(`http://localhost:4000/blogs/${blogId}`, {
          headers: {
            Authorization: localStorage.getItem("access_token"),
          },
        })
        .then((res) => console.log(res.data));
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={blog?.img} alt="blogimage" />
        <div className="user">
          {blog.userImg && <img src={blog.userImg} alt="userimage" />}
          <div className="info">
            <span>{blog.username}</span>
            <p>Posted {moment(blog.date).fromNow()}</p>
          </div>
          {currentUser?.username === blog.username && (
            <div className="edit">
              <Link to={`/create?edit=2`}>
                <button>Edit</button>
              </Link>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
        <h1>{blog.title}</h1>
        {blog.desc}
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlog;
