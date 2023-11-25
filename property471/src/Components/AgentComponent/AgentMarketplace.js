
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Marketplace = () => {
  const [userProperties, setUserProperties] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/marketplace/marketplace_properties')
      .then(response => {
        console.log(response.data.data);
        setUserProperties(response.data.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setUserProperties([]); // set to an empty array or handle the error appropriately
      });
  }, []);

  return (
    <>
   
    <div>
      {Array.isArray(userProperties) && userProperties.map(property => (
        <Card key={property.property_id}>
          <Card.Body>
            <Card.Title>{property.property_name}</Card.Title>
            {/* <Card.Subtitle >{property.property_location}</Card.Subtitle> */}
            <Card.Text>Price: {property.property_price}</Card.Text>
            <Card.Text>Location: {property.property_location}</Card.Text>
            <Card.Text>Size: {property.property_size}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
};

export default Marketplace;

