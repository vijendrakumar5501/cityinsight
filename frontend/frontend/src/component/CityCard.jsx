import React from 'react';

const CityCard = ({ city }) => {
  console.log(city)
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '10px',
      }}
    >
      <img
        src={`http://localhost:8000${city.image}`}
        alt={city.cityName}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      />
      <h4 style={{ margin: '10px 0',textAlign:"center"
      }}>{city.cityName}</h4>
      <p><strong>State:</strong> {city.state}</p>
      <p><strong>Famous Place:</strong> {city.famousPlace}</p>
      <p><strong>Famous Food:</strong> {city.famousFood}</p>
      <p><strong>Famous Temple:</strong> {city.famousTemple}</p>
      <p><strong>Budget:</strong> {city.budget}</p>
    </div>
  );
};

export default CityCard;
