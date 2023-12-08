


// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const UserDashboard = ({ userId, setUserId, setUserType, userImagePath }) => {
//   const [isEditingProfile, setEditingProfile] = useState(false);
//   const [isAddingProperty, setAddingProperty] = useState(false);
//   const [userData, setUserData] = useState({});
//   const [userProperties, setUserProperties] = useState([]);
//   const navigate = useNavigate();

//   const handleEditProfile = () => {
//     setEditingProfile(true);
//     navigate("/UserEditProfile");
//   };

//   const handleAddProperty = () => {
//     setAddingProperty(true);
//     navigate("/PropertyCreation");
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
//     axios.post("http://127.0.0.1:8000/api/get_data/user_property", { user_id: userId })
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

//   useEffect(() => {
//     fetchUserData();
//     fetchUserProperties();
//   }, [userId]); // Fetch user data and properties when the userId changes

//   return (
   
//       <div style={{backgroundColor:"black"}}>
      
//       {/* <div className="mt-4"  > */}
//         <div className=" p-4 mb-4 rounded-lg" style={{backgroundColor:"#e6fff7"}}>
//       {/* <h className="text">Dashboard</h> */}
//       <div className="mt-4 ">
//         {/* Display individual user information */}
//         <div className="col-lg-4" >
//           <div className="card mb-4" style={{backgroundColor:"#FFFFFF" ,borderRadius: '15px' }}>
//             <div className="card-body text-center">
//               <img src={userImagePath} alt="avatar"
//                 className="rounded-circle img-fluid" style={{ width: '150px' }} />
//               <h5 className="my-3">{userData.name}</h5>
//               <p className="text-muted mb-1">{userData.user_id}</p>
//               <p className="text-muted mb-4">{userData.address}</p>
//               <div className="d-flex justify-content-center mb-2">
//                 {/* <button type="button" className="btn btn-primary">Follow</button> */}
//                 <button type="button" className="btn btn-outline-success ms-1" onClick={handleEditProfile}>Edit Profile</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 " style={{ width: '150px' }}  >
//         {!isAddingProperty && (
//           <Button variant="success" onClick={handleAddProperty}>
//             Add Property
//           </Button>
//         )}
//       </div>

//         {/* Display user-specific properties in cards */}
//         {userProperties.map(property => (
//           <div className="col-sm-12" key={property.property_id}>
//             <div className=' py-4 px-1 h-10'>
//             <div className="card" style={{ borderRadius: '15px', width: 'flex', backgroundColor: '#FFFFFF' }}>
//               <div className="card-body p-4">
//                 <div className="d-flex text-black">
//                   <div className="flex-shrink-0">
//                     <img
//                       src={property.imagePath || 'https://www.indiashotels.com/webadmin/thumbs/863706-622c611d19cc5ffd9618c30d_saptha%20gallery%20images%203.jpg'}
//                       alt="Property"
//                       className="img-fluid"
//                       style={{ width: '180px', borderRadius: '10px' }}
//                     />
//                   </div>
//                   <div className="flex-grow-1 ms-3">
//                     <h5 className="mb-1">{property.property_name}</h5>
//                     <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
//                     </p>
//                     <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefff' }}>
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
//                       <p className="small text-muted mb-1">Hire Agent</p>
//                       {property.agent_id ? (
//                         <p className="mb-0 ">{property.agent_id}</p>
//                       ) : (
//                         <p className="mb-0">No Agent Hired</p>
//                       )}
//                     </div>
//                     <div className="px-5">
//                       <p className="small text-muted mb-1">Hire Support</p>
//                       {property.support_id ? (
//                         <p className="mb-0 ">{property.support_id}</p>
//                       ) : (
//                         <p className="mb-0">No Support Hired</p>
//                       )}
//                     </div>
//                     </div>
//                     <div className="d-flex pt-1">
//                       <button type="button" className="btn btn-outline-success me-1 flex-grow-1" >
//                         Remove Property
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 </div>
//                 </div>
//             </div>
//           </div>
//         ))}
        
//       </div>
      
     
//     </div>
//     // </div>
    
 
//   );
// };

// export default UserDashboard;




import React, { useState, useEffect } from 'react';
import { Button ,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = ({ userId, setUserId, setUserType, userImagePath }) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [isAddingProperty, setAddingProperty] = useState(false);
  const [userData, setUserData] = useState({});
  const [userProperties, setUserProperties] = useState([]);
  const [error, setError] = useState(null);
  const[ propertyId, setPropertyId]= useState("")
  const navigate = useNavigate();

  const handleEditProfile = () => {
    setEditingProfile(true);
    navigate("/UserEditProfile");
  };

  const handleAddProperty = () => {
    setAddingProperty(true);
    navigate("/PropertyCreation");
  };

  const handleRemoveProperty = (propertyId) => {
        axios.post("http://127.0.0.1:8000/api/remove/remove_property", { property_id:propertyId })
    
      .then((response) => {
        
        if (response.status === 201) {
          console.log("Property removed successfully");
          fetchUserProperties();
        } else if (response.status === 402) {
          setError("Cannot remove property. Employee hired on property.");
        } else {
          setError(`Failed to remove property with status code: ${response.status}`);
        }
      })
      .catch((error) => {
        setError(`Cannot remove property. Employee hired on property:  ${propertyId}`);
      });
  };


  const fetchUserData = () => {
    axios.post("http://127.0.0.1:8000/api/get_data/single_user", { user_id: userId })
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data.data);
        } else {
          console.error("Failed to fetch user data with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Network/server error while fetching user data:", error);
      });
  };

  const fetchUserProperties = () => {
    axios.post("http://127.0.0.1:8000/api/get_data/user_property", { user_id: userId })
      .then((response) => {
        if (response.status === 200) {
          setUserProperties(response.data.data);
          
          
        } else {
          console.error("Failed to fetch user properties with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Network/server error while fetching user properties:", error);
      });
  };
  
  useEffect(() => {
    fetchUserData();
    fetchUserProperties();
  }, [userId]); // Fetch user data and properties when the userId changes

  return (
   
      <div style={{backgroundColor:"black"}}>
      
      {/* <div className="mt-4"  > */}
        <div className=" p-4 mb-4 rounded-lg" style={{backgroundColor:"#F5FFFA"}}>
      {/* <h className="text">Dashboard</h> */}
      <div className="mt-4 ">
        {/* Display individual user information */}
        <div className="col-lg-4" >
          <div className="card mb-4" style={{backgroundColor:"#FFFFFF" ,borderRadius: '15px' }}>
            <div className="card-body text-center">
              <img src={userImagePath} alt="avatar"
                className="rounded-circle img-fluid" style={{ width: '150px' }} />
              <h5 className="my-3">{userData.name}</h5>
              <p className="text-muted mb-1">{userData.user_id}</p>
              <p className="text-muted mb-4">{userData.address}</p>
              <div className="d-flex justify-content-center mb-2">
                {/* <button type="button" className="btn btn-primary">Follow</button> */}
                <button type="button" className="btn btn-outline-success ms-1" onClick={handleEditProfile}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 " style={{ width: '150px' }}  >
        {!isAddingProperty && (
          <Button variant="success" onClick={handleAddProperty}>
            Add Property
          </Button>
        )}
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
        {/* Display user-specific properties in cards */}
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        {userProperties.map(property => (
          
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
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#F5FFFA' }}>
                      <div className="px-5">
                        <p className="small text-muted mb-1">PropertyName</p>
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
                      <p className="small text-muted mb-1">Hire Agent</p>
                      {property.agent_id ? (
                        <p className="mb-0 ">{property.agent_id}</p>
                      ) : (
                        <p className="mb-0">No Agent Hired</p>
                      )}
                    </div>
                    <div className="px-5">
                      <p className="small text-muted mb-1">Hire Support</p>
                      {property.support_id ? (
                        <p className="mb-0 ">{property.support_id}</p>
                      ) : (
                        <p className="mb-0">No Support Hired</p>
                      )}
                    </div>
                    </div>
                    <div className="d-flex pt-1">
                      <button type="button" className="btn btn-outline-success me-1 flex-grow-1" onClick={() => handleRemoveProperty(property.property_id)} >
                        Remove Property
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
      
     
    </div>
    // </div>
    
 
  );
};

export default UserDashboard;

