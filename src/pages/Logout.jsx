import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="logout">
      <h1>You have successfully logged out!</h1>
      <div className="container">
        <Link to="/">
          <button>Go to Home Page</button>
        </Link>
        <Link to="/login">
          <button>Go to Login Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
