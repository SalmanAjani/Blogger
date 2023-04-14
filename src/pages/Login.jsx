import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error("Login failed, wrong credentials!");
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <h2 style={{ marginBottom: "15px" }}>Test Account:-</h2>
      <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
        <div>
          <h3>Account 1</h3>
          <p>Username: admin1</p>
          <p>Password: admin100</p>
        </div>
        <div>
          <h3>Account 2</h3>
          <p>Username: admin2</p>
          <p>Password: admin200</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
