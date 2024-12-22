import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import detailbg from "../assets/detailbg.jpg"; // Correct import

const AddDetail = () => {
  const [formData, setFormData] = useState({
    cityName: "",
    state: "",
    famousPlace: "",
    famousFood: "",
    famousTemple: "",
    budget: "",
    image: null,
  });

  const navigate = useNavigate(); // useNavigate hook to navigate

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { cityName, state, image, famousPlace, famousFood, famousTemple, budget } = formData;

    if (!cityName || !state || !image || !famousPlace || !famousFood || !famousTemple || !budget) {
      alert("Please fill in the city name and upload an image before submitting.");
      return;
    }

    const form = new FormData();
    form.append("cityName", cityName);
    form.append("state", state);
    form.append("image", image);
    form.append("famousPlace", famousPlace);
    form.append("famousFood", famousFood);
    form.append("famousTemple", famousTemple);
    form.append("budget", budget);

    try {
      const response = await fetch("http://localhost:8000/api/city-details", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      const responseData = await response.json();
      alert(responseData.message);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCancel = () => {
   
    navigate("/home");
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${detailbg})`,  
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
        overflow: "hidden", 
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "40px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.9)", 
          overflow: "hidden",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Add City Details
        </h2>
        <form onSubmit={handleSubmit}>
          {/* City Name and State Name in One Row */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px",gap:'20px' }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label style={{ fontWeight: "bold" }}>City Name:</label>
              <input
                type="text"
                name="cityName"
                value={formData.cityName}
                onChange={handleChange}
                placeholder="Enter city name"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: "bold" }}>State Name:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state name"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          {/* Famous Food Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold" }}>Famous Food:</label>
            <input
              type="text"
              name="famousFood"
              value={formData.famousFood}
              onChange={handleChange}
              placeholder="Enter famous food"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Famous Place Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold" }}>Famous Place:</label>
            <input
              type="text"
              name="famousPlace"
              value={formData.famousPlace}
              onChange={handleChange}
              placeholder="Enter famous place"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Famous Temple Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold" }}>Famous Temple:</label>
            <input
              type="text"
              name="famousTemple"
              value={formData.famousTemple}
              onChange={handleChange}
              placeholder="Enter famous temple"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Budget Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold" }}>Budget:</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Enter budget"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Image Input Field */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold" }}>Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Buttons in One Row */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "48%", // To allow space for cancel button
                padding: "10px 20px",
                backgroundColor: "#28a745", // Green button
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Submit
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={handleCancel}
              style={{
                width: "48%", // To align with the submit button
                padding: "10px 20px",
                backgroundColor: "#dc3545", // Red button for cancel
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDetail;
