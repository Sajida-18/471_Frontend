
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
  const [userProperties, setUserProperties] = useState([]);
  const navigate = useNavigate();

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

  const handleBuyClick = (propertyId) => {
    
    navigate("/SignupLogin")
    console.log(`Buy property with ID: ${propertyId}`);
  };

  return (
    <>
   
   <div className="mt-4">
        {Array.isArray(userProperties) &&  userProperties.map(property => (
          <div className="col-sm-12" key={property.property_id}>
            <div className=' py-4 px-1 h-10'>
            <div className="card" style={{ borderRadius: '15px', width: 'flex', backgroundColor: '#FFFFFF' }}>
              <div className="card-body p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src={property.imagePath || 'https://media.discordapp.net/attachments/1165504181126320249/1180218866731864217/property_stock.png?ex=657c9f79&is=656a2a79&hm=3c307248e3fcf4571245743e3ee2a17f0f5d1129fede908d289cd04105fb45ab&=&format=webp&quality=lossless&width=468&height=468'}
                      alt="Property"
                      className="img-fluid"
                      style={{ width: '180px', borderRadius: '10px' }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">{property.property_id}</h5>
                    <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
                    </p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefff' }}>
                      <div className="px-5">
                        <p className="small text-muted mb-1">Property Name</p>
                        <p className="mb-0 ">{property.property_name}</p>
                      </div>
                      <div className="px-5">
                        <p className="small text-muted mb-1">Location</p>
                        <p className="mb-0 ">{property.property_location}</p>
                      </div>
                      <div className="px-5">
                        <p className="small text-muted mb-1">Price</p>
                        <p className="mb-0 ">{property.property_price}</p>
                      </div>
                      <div className="px-5">
                      <p className="small text-muted mb-1">Size</p>
                      <p className="mb-0 ">{property.property_size}</p>
                      </div>
                      <div className="px-5">
                      <p className="small text-muted mb-1">Hired Agent</p>
                      {property.agent_id ? (
                        <p className="mb-0 ">{property.agent_id}</p>
                      ) : (
                        <p className="mb-0">No Agent Hired</p>
                      )}
                    </div>
                    <div className="px-5">
                      <p className="small text-muted mb-1">Hired Support</p>
                      {property.support_id ? (
                        <p className="mb-0 ">{property.support_id}</p>
                      ) : (
                        <p className="mb-0">No Support Hired</p>
                      )}
                    </div>
                    
                     
                      
                    </div>
                    <div className="d-flex pt-1">
                      <button type="button" className="btn btn-outline-success me-1 flex-grow-1"  onClick={handleBuyClick}>
                        Buy property
                      </button>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Marketplace;
