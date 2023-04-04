import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Blog</Link>
        </div>
        <div className="features">
          John
          <Link to="/logout">
            <button>Logout</button>
          </Link>
          <Link to="/create">
            <button className="create">Create</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
