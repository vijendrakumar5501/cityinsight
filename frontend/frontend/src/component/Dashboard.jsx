import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import CityCard from './CityCard';
import axios from 'axios';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]); // State for cities from the backend
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  // Fetch city details from the backend
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/city-details/getAllcitydetails') // Replace with your API endpoint
      .then((response) => {
        setCities(response.data); // Update state with fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error('Error fetching cities:', error);
        setError('Failed to fetch city details');
        setLoading(false); // Stop loading
      });
  }, []);

  // Handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Navigate to add-city page
  const handleAddCityClick = () => {
    // navigate('/add-city');
    navigate('/add-city');
  };

  // Filter cities based on the search term
  const filteredCities = cities.filter((city) =>
    city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      {/* Search and Add City */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for a city"
            style={{
              padding: '10px',
              width: '300px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <FaSearch style={{ marginLeft: '-30px', color: '#888', fontSize: '18px' }} />
        </div>

        <button
          onClick={handleAddCityClick}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add City
        </button>
      </div>

      {/* City Cards */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredCities.map((city, index) => (
            <CityCard key={index} city={city} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
