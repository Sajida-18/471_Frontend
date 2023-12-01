import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PropertyCreation = ({ userId }) => {
    const [propertyName, setPropertyName] = useState('');
    const [propertyPrice, setPropertyPrice] = useState('');
    const [location, setLocation] = useState('');
    const [size, setSize] = useState('');
    const [propertyImage, setPropertyImage] = useState(null); 
    const [propertyErrorMessage, setPropertyErrorMessage] = useState('');
  
    const navigate = useNavigate();
  
    const handleSaveProperty = () => {
      if (propertyName && propertyPrice && location && size) {
        const propertyData = new FormData();
        propertyData.append('user_id', userId);
        propertyData.append('property_name', propertyName);
        propertyData.append('property_price', propertyPrice);
        propertyData.append('property_location', location);
        propertyData.append('property_size', size);
        // propertyData.append('property_image', propertyImage); // Append the image
  
        axios
          .post("http://127.0.0.1:8000/api/property/create_property", propertyData, {
            headers: {
              "Content-Type": "multipart/form-data", // Use multipart/form-data for file uploads
            },
          })
          .then((response) => {
            if (response.status === 201) {
              console.log("Property creation was successful.");
              navigate('/UserDashboard');
            } else {
              console.error("Property creation failed with status code:", response.status);
            }
          })
          .catch((error) => {
            console.error("Network/server error:", error);
          });
      } else {
        setPropertyErrorMessage(<div style={{ color: "red" }}>All fields are required</div>);
      }
    };
  
  return (
    
    <div  style={{ backgroundColor: 'white' }}>
    <div className="container ">
      <h1 className="mb-4">Property Creation</h1>
      
      <form>
        <div className="mb-3">
          <label htmlFor="PropertyName" className="form-label">
            Property Name
          </label>
          <input
            type="text"
            className="form-control"
            id="PropertyName"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            required
            />
        </div>

        <div className="mb-3">
          <label htmlFor="PropertyPrice" className="form-label">
            Property Price
          </label>
          <input
            type="text"
            className="form-control"
            id="PropertyPrice"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="propertyLocation" className="form-label">
            Property Location
          </label>
          <input
            type="text"
            className="form-control"
            id="propertyLocation"
            value={location}
            onChange={(e) =>setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="size" className="form-label">
            Property size
          </label>
          <input
            type="text"
            className="form-control"
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </div>
        {/* <div className="mb-3">
            <label htmlFor="propertyImage" className="form-label">
              Property Image
            </label>
            <input
              type="file"
              className="form-control"
              id="propertyImage"
              onChange={(e) => setPropertyImage(e.target.files[0])}
              
            />
          </div> */}
    </form>

        
    {propertyErrorMessage && <div className="error-message">{propertyErrorMessage}</div>}
    <Button variant="success" onClick={handleSaveProperty} className="mt-3">
        Save Property
     </Button>

      
    </div>
    </div>
  );
};

export default PropertyCreation;

