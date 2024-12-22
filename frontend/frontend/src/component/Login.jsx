import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import loginbg from "../assets/loginbg.jpg"; // Make sure to replace with your image's correct path

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      handleError("Please fill in both email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      handleError("Please enter a valid email address.");
      return;
    }

    try {
      const url = "http://localhost:8000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details || "An error occurred");
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || "Something went wrong.");
    }
  };

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${loginbg})`, // Add your background image here
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  };

  const formStyle = {
    maxWidth: "400px",
    width: "100%",
    padding: "24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background for the form
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "24px",
    color: "#2d3748",
  };

  const labelStyle = {
    display: "block",
    textAlign: "left",
    color: "#4a5568",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "16px",
    marginBottom: "16px",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const inputFocusStyle = {
    borderColor: "#48bb78",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#48bb78",
    color: "white",
    fontSize: "18px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#38a169",
  };

  const linkStyle = {
    fontSize: "14px",
    color: "#3182ce",
    textDecoration: "none",
    marginLeft: "4px",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <ToastContainer />
        <h2 style={headerStyle}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = ""}
            />
          </div>
          <div>
            <label style={labelStyle}>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = ""}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Login
          </button>
          <div style={{ marginTop: "24px", color: "#4a5568" }}>
            <span style={{ fontSize: "14px" }}>Create a new account</span>
            <Link to="/signup" style={linkStyle}>
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
