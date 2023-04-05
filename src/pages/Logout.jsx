import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="logout">
      <h1>You have successfully logged out.</h1>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/">
          <button className="logoutbtn">Go to Home Page</button>
        </Link>
        <Link to="/login">
          <button className="logoutbtn">Go to Login Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
