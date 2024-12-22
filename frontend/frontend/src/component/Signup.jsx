import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signupbg from "../assets/signupbg.jpg"; // Make sure to add your image in the assets folder
import { CgOverflow } from "react-icons/cg";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      handleError("Please fill in all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      handleError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      handleError("Passwords do not match.");
      return;
    }

    try {
      const url = "http://localhost:8000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
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
    backgroundImage: `url(${signupbg})`, // Use the background image here
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
   
  };

  const formStyle = {
    maxWidth: "500px",
    width: "100%",
    padding: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background for the form
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center",
    color: "#2d3748",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    marginBottom: "6px",
    color: "#4a5568",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#48bb78",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#38a169",
  };

  const linkContainerStyle = {
    textAlign: "center",
    marginTop: "20px",
    color: "#4a5568",
  };

  const linkStyle = {
    color: "#3182ce",
    textDecoration: "none",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <ToastContainer />
        <h2 style={headerStyle}>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Middle Name (Optional):</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Enter your middle name (optional)"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={inputStyle}
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
            />
          </div>
          <div>
            <label style={labelStyle}>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Signup
          </button>
          <div style={linkContainerStyle}>
            <span>Already have an account? </span>
            <Link to="/login" style={linkStyle}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
