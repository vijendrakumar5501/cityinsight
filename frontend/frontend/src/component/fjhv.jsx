// import React, { useState } from 'react';

// // AddDetail component - for entering city details
// function AddDetail({ onAddCity }) {
//   const [cityDetails, setCityDetails] = useState({
//     image: '',
//     cityName: '',
//     state: '',
//     famousPlace: '',
//     famousSweet: '',
//     famousTemple: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCityDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddCity(cityDetails);
//     setCityDetails({
//       image: '',
//       cityName: '',
//       state: '',
//       famousPlace: '',
//       famousSweet: '',
//       famousTemple: '',
//     });
//   };

//   return (
//     <div>
//       <h3>Add City Details</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="cityName"
//           placeholder="City Name"
//           value={cityDetails.cityName}
//           onChange={handleChange}
//           style={{ margin: '5px', padding: '8px' }}
//         />
//         <input
//           type="text"
//           name="state"
//           placeholder="State"
//           value={cityDetails.state}
//           onChange={handleChange}
//           style={{ margin: '5px', padding: '8px' }}
//         />
//         <input
//           type="text"
//           name="famousPlace"
//           placeholder="Famous Place"
//           value={cityDetails.famousPlace}
//           onChange={handleChange}
//           style={{ margin: '5px', padding: '8px' }}
//         />
//         <input
//           type="text"
//           name="famousSweet"
//           placeholder="Famous Sweet"
//           value={cityDetails.famousSweet}
//           onChange={handleChange}
//           style={{ margin: '5px', padding: '8px' }}
//         />
//         <input
//           type="text"
//           name="famousTemple"
//           placeholder="Famous Temple"
//           value={cityDetails.famousTemple}
//           onChange={handleChange}
//           style={{ margin: '5px', padding: '8px' }}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={cityDetails.image}
//           onChange={handleChange}
//           style={{ margin: '5px', padding: '8px' }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: '8px 15px',
//             margin: '5px',
//             cursor: 'pointer',
//             backgroundColor: '#007BFF',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//           }}
//         >
//           Add City
//         </button>
//       </form>
//     </div>
//   );
// }

// // CityCard component - for displaying the city details in a card
// function CityCard({ city }) {
//   return (
//     <div
//       className="city-card"
//       style={{
//         border: '1px solid #ddd',
//         padding: '15px',
//         margin: '10px',
//         width: '250px',
//         display: 'inline-block',
//         verticalAlign: 'top',
//         textAlign: 'center',
//       }}
//     >
//       <img
//         src={city.image}
//         alt={city.cityName}
//         style={{
//           width: '100%',
//           height: '150px',
//           objectFit: 'cover',
//           borderRadius: '4px',
//         }}
//       />
//       <h4>{city.cityName}</h4>
//       <p><strong>State:</strong> {city.state}</p>
//       <p><strong>Famous Place:</strong> {city.famousPlace}</p>
//       <p><strong>Famous Sweet:</strong> {city.famousSweet}</p>
//       <p><strong>Famous Temple:</strong> {city.famousTemple}</p>
//     </div>
//   );
// }

// // Dashboard component
// function Dashboard() {
//   const [showAddDetail, setShowAddDetail] = useState(false);
//   const [cities, setCities] = useState([]);

//   const handleAddCityClick = () => {
//     setShowAddDetail(true);
//   };

//   const handleAddCity = (cityDetails) => {
//     setCities((prevCities) => [...prevCities, cityDetails]);
//     setShowAddDetail(false); // Hide AddDetail component after adding city
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           marginBottom: '20px',
//           alignItems: 'center',
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search"
//           style={{
//             padding: '8px',
//             margin: '5px',
//             flex: 1,
//             borderRadius: '4px',
//             border: '1px solid #ddd',
//           }}
//         />
//         <button
//           onClick={handleAddCityClick}
//           style={{
//             padding: '8px 15px',
//             margin: '5px',
//             cursor: 'pointer',
//             backgroundColor: '#28A745',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//           }}
//         >
//           Add City
//         </button>
//       </div>

//       {showAddDetail && <AddDetail onAddCity={handleAddCity} />}

//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           marginTop: '20px',
//         }}
//       >
//         {cities.map((city, index) => (
//           <CityCard key={index} city={city} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



