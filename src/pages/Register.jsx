import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/auth/register", formData);
      toast.success("User registered successfully!");
      navigate("/login");
    } catch (err) {
      // console.log(err.response.data);
      toast.error("User already exists!");
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={handleChange}
        />
        <button>Register</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
