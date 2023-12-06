
// import React, { useState, useEffect } from 'react';
// import {  Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";


// const AgentDashboard = ({userId, setUserId, setUserType, userImagePath}) => {
//   const [isEditingProfile, setEditingProfile] = useState(false);
 
//   const [userData, setUserData] = useState({});
//   const [userProperties, setUserProperties] = useState([]);
//   const [propertyStatus, setPropertyStatus] = useState({});

//   const navigate = useNavigate();

//   const handleEditProfile = () => {
//     setEditingProfile(true);
//     navigate("/AgentEditProfile");
//   };

  
    
//   const fetchUserData = () => {
//     axios.post("http://127.0.0.1:8000/api/get_data/single_user", { user_id: userId })
//       .then((response) => {
//         if (response.status === 200) {
//           setUserData(response.data.data);
//         } else {
//           console.error("Failed to fetch user data with status code:", response.status);
//         }
//       })
//       .catch((error) => {
//         console.error("Network/server error while fetching user data:", error);
//       });
//   };
      
//   const fetchUserProperties = () => {
//     axios.post("http://127.0.0.1:8000/api/get_data/agent_property", { agent_id: userId })
//       .then((response) => {
//         if (response.status === 200) {
//           setUserProperties(response.data.data);
//         } else {
//           console.error("Failed to fetch user properties with status code:", response.status);
//         }
//       })
//       .catch((error) => {
//         console.error("Network/server error while fetching user properties:", error);
//       });
//   };

//   // Fetch user properties when the component mounts
//   useEffect(() => {
//     fetchUserData();
//     fetchUserProperties();
//   }, [userId]); // Empty dependency array means this effect runs once on mount
  
//   const handleToggleMarketplace = (propertyId) => {
//     const apiUrl = propertyStatus[propertyId]
//       ? 'http://127.0.0.1:8000/api/marketplace/remove_from_marketplace'
//       : 'http://127.0.0.1:8000/api/marketplace/add_to_marketplace';

//     axios.post(apiUrl, { property_id: propertyId })
//       .then((response) => {
//         if (response.status === 201) {
//           // Update the property status in state
//           setPropertyStatus((prevStatus) => ({
//             ...prevStatus,
//             [propertyId]: !prevStatus[propertyId],
//           }));
//         } else {
//           console.error(`Failed to toggle marketplace status for property ${propertyId} with status code:`, response.status);
//         }
//       })
//       .catch((error) => {
//         console.error("Network/server error while toggling marketplace status:", error);
//       });
//   };

//       return (
        
//         <div className=" p-4 mb-4 rounded-lg"  style={{backgroundColor: "#e6fff7"}}>
//           {/* <h1 className="text"> Agent Dashboard</h1> */}
//           <div className="mt-4 ">
//         {/* Display individual user information */}
//         <div className="col-lg-4" >
//           <div className="card mb-4" style={{backgroundColor:"#FFFFFF" ,borderRadius: '15px'}}>
//             <div className="card-body text-center">
//               <img src={userImagePath} alt="avatar"
//                 className="rounded-circle img-fluid" style={{ width: '150px' }} />
//               <h5 className="my-3">{userData.name}</h5>
//               <p className="text-muted mb-1">{userData.user_id}</p>
//               <p className="text-muted mb-4">{userData.address}</p>
//               <div className="d-flex justify-content-center mb-2">
//                 {/* <button type="button" className="btn btn-primary">Follow</button> */}
//                 <button type="button" className="btn btn-outline-success ms-1"  onClick={handleEditProfile}>Edit Profile</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
          
//           <div className="mt-4">
//             <h2>Properties</h2>
            
//         {/* Display user-specific properties in cards */}
//         <div className="mt-4">
//         {/* Display user-specific properties in cards */}
//         {userProperties.map(property => (
//           <div className="col-sm-12 " key={property.property_id}>
//             <div className=' py-4 px-1 h-10'>
//             <div className="card" style={{ borderRadius: '15px', width: 'flex', backgroundColor: '#FFFFFF' }}>
//               <div className="card-body">
//                 <div className="d-flex text-black">
//                   <div className="flex-shrink-0">
//                     <img
//                       src={property.imagePath || 'https://media.discordapp.net/attachments/1165504181126320249/1180218866731864217/property_stock.png?ex=657c9f79&is=656a2a79&hm=3c307248e3fcf4571245743e3ee2a17f0f5d1129fede908d289cd04105fb45ab&=&format=webp&quality=lossless&width=468&height=468'}
//                       alt="Property"
//                       className="img-fluid"
//                       style={{ width: '180px', borderRadius: '10px' }}
//                     />
//                   </div>
//                   <div className="flex-grow-1 ms-3">
//                     <h5 className="mb-1">{property.property_name}</h5>
//                     <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
//                     </p>
//                     <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#F5FFFA' }}>
//                       <div className="px-5">
//                         <p className="small text-muted mb-1">Property Id</p>
//                         <p className="mb-0 ">{property.property_id}</p>
//                       </div>
//                       <div className="px-5">
//                         <p className="small text-muted mb-1">Location</p>
//                         <p className="mb-0 ">{property.property_location}</p>
//                       </div>
//                       <div className="px-5">
//                         <p className="small text-muted mb-1">Price</p>
//                         <p className="mb-0 ">{property.property_price}</p>
//                       </div>
//                       <div className="px-5">
//                       <p className="small text-muted mb-1">Size</p>
//                       <p className="mb-0 ">{property.property_size}</p>
//                       </div>
//                       <div className="px-5">
//                       <p className="small text-muted mb-1">Market status</p>
//                       <p className="mb-0 ">{property.market_status}</p>
//                       </div>
//                       <div className="px-5">
//                       <p className="small text-muted mb-1">owner_id</p>
//                       <p className="mb-0 ">{property.user_id}</p>
//                       </div>
//                     </div>
                    
//                     <div className="d-flex pt-1">
//                     <Button className=" me-1 flex-grow-1"
//                           variant={propertyStatus[property.property_id] ? "outline-danger" : "outline-success"}
//                           onClick={() => handleToggleMarketplace(property.property_id)}
//                         >
//                           {propertyStatus[property.property_id] ? "Remove from Marketplace" : "Add to Marketplace"}
//                         </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
    
//   );
// };

// export default AgentDashboard;


import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AgentDashboard = ({ userId, setUserId, setUserType, userImagePath }) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [userData, setUserData] = useState({});
  const [userProperties, setUserProperties] = useState([]);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    setEditingProfile(true);
    navigate('/AgentEditProfile');
  };

  const handleToggleMarketplace = (propertyId, currentStatus) => {
    const apiUrl = currentStatus
      ? 'http://127.0.0.1:8000/api/marketplace/remove_from_marketplace'
      : 'http://127.0.0.1:8000/api/marketplace/add_to_marketplace';

    axios
      .post(apiUrl, { property_id: propertyId })
      .then((response) => {
        if (response.status === 201) {
          // Update the property status in state
          setUserProperties((prevProperties) =>
            prevProperties.map((property) =>
              property.property_id === propertyId
                ? { ...property, market_status: !currentStatus ? 'for sale' : 'Available For Sale' }
                : property
            )
          );
        } else {
          console.error(`Failed to toggle marketplace status for property ${propertyId} with status code:`, response.status);
        }
      })
      .catch((error) => {
        console.error('Network/server error while toggling marketplace status:', error);
      });
  };

  const fetchUserData = () => {
    axios
      .post('http://127.0.0.1:8000/api/get_data/single_user', { user_id: userId })
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data.data);
        } else {
          console.error('Failed to fetch user data with status code:', response.status);
        }
      })
      .catch((error) => {
        console.error('Network/server error while fetching user data:', error);
      });
  };

  const fetchUserProperties = () => {
    axios
      .post('http://127.0.0.1:8000/api/get_data/agent_property', { agent_id: userId })
      .then((response) => {
        if (response.status === 200) {
          setUserProperties(response.data.data);
        } else {
          console.error('Failed to fetch user properties with status code:', response.status);
        }
      })
      .catch((error) => {
        console.error('Network/server error while fetching user properties:', error);
      });
  };

  // Fetch user properties when the component mounts
  useEffect(() => {
    fetchUserData();
    fetchUserProperties();
  }, [userId]); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="p-4 mb-4 rounded-lg" style={{ backgroundColor: '#e6fff7' }}>
        <div className="mt-4">
          {/* Display individual user information */}
          <div className="col-lg-4">
            <div className="card mb-4" style={{ backgroundColor: '#FFFFFF', borderRadius: '15px' }}>
              <div className="card-body text-center">
                <img src={userImagePath} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                <h5 className="my-3">{userData.name}</h5>
                <p className="text-muted mb-1">{userData.user_id}</p>
                <p className="text-muted mb-4">{userData.address}</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-outline-success ms-1" onClick={handleEditProfile}>
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2>Properties</h2>
          {/* Display user-specific properties in cards */}
          <div className="mt-4">
            {userProperties.map((property) => (
              <div className="col-sm-12" key={property.property_id}>
                <div className="py-4 px-1 h-10">
                  <div className="card" style={{ borderRadius: '15px', width: 'flex', backgroundColor: '#FFFFFF' }}>
                    <div className="card-body">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <img
                            src={
                              property.imagePath ||
                              'https://media.discordapp.net/attachments/1165504181126320249/1180218866731864217/property_stock.png?ex=657c9f79&is=656a2a79&hm=3c307248e3fcf4571245743e3ee2a17f0f5d1129fede908d289cd04105fb45ab&=&format=webp&quality=lossless&width=468&height=468'
                            }
                            alt="Property"
                            className="img-fluid"
                            style={{ width: '180px', borderRadius: '10px' }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="mb-1">{property.property_id}</h5>
                          <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}></p>
                          <div
                            className="d-flex justify-content-start rounded-3 p-2 mb-2"
                            style={{ backgroundColor: '#F5FFFA' }}
                          >
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
                              <p className="small text-muted mb-1">Market status</p>
                              <p className="mb-0 ">{property.market_status}</p>
                            </div>
                            <div className="px-5">
                              <p className="small text-muted mb-1">owner_id</p>
                              <p className="mb-0 ">{property.user_id}</p>
                            </div>
                          </div>

                          <div className="d-flex pt-1">
                            <Button
                              className="me-1 flex-grow-1"
                              variant={property.market_status === 'for sale' ? 'outline-danger' : 'outline-success'}
                              onClick={() =>
                                handleToggleMarketplace(property.property_id, property.market_status === 'for sale')
                              }
                            >
                              {property.market_status === 'for sale' ? 'Remove from Marketplace' : 'Add to Marketplace'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentDashboard;



