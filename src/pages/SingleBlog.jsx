import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/AuthContextProvider";
import DOMPurify from "dompurify";
import { toast } from "react-toastify";

const SingleBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const blogId = location.pathname.split("/")[2]; // blog id is at index 2 in the url localhost:4000/blogs/:id

  const [blog, setBlog] = useState({});

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
      await axios.delete(`http://localhost:4000/blogs/${blogId}`, {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      });
      toast.success("Blog deleted successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to="/">
        <button className="singlebtn">Go Back</button>
      </Link>
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
                <Link to={`/create?edit=2`} state={blog}>
                  <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
              </div>
            )}
          </div>
          <h1>{blog.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.desc),
            }}
          ></p>
        </div>
        <div className="menu">
          <Menu category={blog.category} />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
