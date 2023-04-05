import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout successful!");
    navigate("/logout");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Blog</Link>
        </div>
        <div className="features">
          {currentUser?.username}

          {currentUser ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}

          <Link to="/create">
            <button className="create">Create</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
