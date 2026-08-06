// src/components/auth/LoginForm.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard", {
      state: { role: "buyer" },
    });
  };

  const demoLogin = (role) => {

    navigate("/dashboard", {
      state: { role },
    });
  };

  return (
    <div className="card shadow-lg border-0 auth-card">

      <div className="card-body p-4">

        <h2 className="fw-bold mb-2">
          Welcome Back
        </h2>

        <p className="text-muted mb-4">
          Login to continue
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">

            <div className="form-check">

              <input
                type="checkbox"
                className="form-check-input"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              <label className="form-check-label">
                Remember Me
              </label>

            </div>

            <Link to="#">
              Forgot Password?
            </Link>

          </div>

          <button className="btn btn-primary w-100 mb-3">
            Login
          </button>

        </form>

        <hr />

        <button
          className="btn btn-outline-primary w-100 mb-2"
          onClick={() => demoLogin("buyer")}
        >
          Login as Buyer
        </button>

        <button
          className="btn btn-outline-success w-100 mb-2"
          onClick={() => demoLogin("supplier")}
        >
          Login as Supplier
        </button>

        {/* <button
          className="btn btn-outline-dark w-100"
          onClick={() => demoLogin("admin")}
        >
          Login as Admin
        </button> */}

        <p className="text-center mt-4">

          Don't have an account?{" "}

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default LoginForm;