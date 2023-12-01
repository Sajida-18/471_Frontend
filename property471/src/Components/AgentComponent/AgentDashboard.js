



import React, { useState, useEffect } from 'react';
import {  Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const AgentDashboard = ({userId, setUserId, setUserType, userImagePath}) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [address, setaddress] = useState('');
  // const [password, setpassword] = useState('');
  // const [confirmPassword, setconfirmPassword] = useState('');
  // const [editProfileErrorMessage, setEditProfileErrorMessage] = useState("");

  const [userData, setUserData] = useState({});
  const [userProperties, setUserProperties] = useState([]);
  const [propertyStatus, setPropertyStatus] = useState({});

  const navigate = useNavigate();

  const handleEditProfile = () => {
    setEditingProfile(true);
    navigate("/UserEditProfile");
  };

  // const handleSaveProfile = () => {
  //   if (name && password && confirmPassword && number && address && email) {
  //     if (password === confirmPassword) {
  //       const userData = {
  //         user_id: userId,
  //         name: name,
  //         email: email,
  //         password: password,
  //         phone: number,
  //         address: address,
  //       };
  //       console.log(userData)
  //       axios
  //         .post("http://127.0.0.1:8000/api/edit_access/user_edit", userData, {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         })
  //         .then((response) => {
            
  //           console.log(response.data)
  //           console.log(response.status)

  //           if (response.status === 201) {
              
  //             console.log("Registration was successful.");
  //             setEditingProfile(false);
  //             navigate("/AgentDashboard")
             
              
  //           } else {
             
  //             console.error(
  //               "Registration failed with status code:",
  //               response.status
  //             );
  //           }
  //         })
  //         .catch((error) => {
            
  //           console.error("Network/server error:", error);
  //         })
         
  //     } else {
  //       setEditProfileErrorMessage(
  //         <div style={{ color: "red" }}>Passwords do not match</div>
  //       );
  //     }
  //   } else {
  //     setEditProfileErrorMessage(
  //       <div style={{ color: "red" }}>All fields are required</div>
  //     );
  //   }
  // };
    
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
    axios.post("http://127.0.0.1:8000/api/get_data/agent_property", { agent_id: userId })
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

  // Fetch user properties when the component mounts
  useEffect(() => {
    fetchUserData();
    fetchUserProperties();
  }, [userId]); // Empty dependency array means this effect runs once on mount
  
  const handleToggleMarketplace = (propertyId) => {
    const apiUrl = propertyStatus[propertyId]
      ? 'http://127.0.0.1:8000/api/marketplace/remove_from_marketplace'
      : 'http://127.0.0.1:8000/api/marketplace/add_to_marketplace';

    axios.post(apiUrl, { property_id: propertyId })
      .then((response) => {
        if (response.status === 201) {
          // Update the property status in state
          setPropertyStatus((prevStatus) => ({
            ...prevStatus,
            [propertyId]: !prevStatus[propertyId],
          }));
        } else {
          console.error(`Failed to toggle marketplace status for property ${propertyId} with status code:`, response.status);
        }
      })
      .catch((error) => {
        console.error("Network/server error while toggling marketplace status:", error);
      });
  };

      return (
        
        <div className="bg-light p-4 mb-4 rounded-lg" >
          <h1 className="text"> Agent Dashboard</h1>
          <div className="mt-4 ">
        {/* Display individual user information */}
        <div className="col-lg-4" >
          <div className="card mb-4" style={{backgroundColor:"#FFFFFF" ,borderRadius: '15px'}}>
            <div className="card-body text-center">
              <img src={userImagePath} alt="avatar"
                className="rounded-circle img-fluid" style={{ width: '150px' }} />
              <h5 className="my-3">{userData.name}</h5>
              <p className="text-muted mb-1">{userData.user_id}</p>
              <p className="text-muted mb-4">{userData.address}</p>
              <div className="d-flex justify-content-center mb-2">
                {/* <button type="button" className="btn btn-primary">Follow</button> */}
                <button type="button" className="btn btn-outline-success ms-1"  onClick={handleEditProfile}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
          
          <div className="mt-4">
            <h2>Properties</h2>
            
        {/* Display user-specific properties in cards */}
        <div className="mt-4">
        {/* Display user-specific properties in cards */}
        {userProperties.map(property => (
          <div className="col-md-4 mb-4 " key={property.property_id}>
            <div className="card" style={{ borderRadius: '15px', width: '900px', backgroundColor: '#FFFFFF' }}>
              <div className="card-body">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src={property.imagePath || 'https://www.indiashotels.com/webadmin/thumbs/863706-622c611d19cc5ffd9618c30d_saptha%20gallery%20images%203.jpg'}
                      alt="Property"
                      className="img-fluid"
                      style={{ width: '180px', borderRadius: '10px' }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">{property.property_name}</h5>
                    <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
                    </p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefff' }}>
                      <div className="px-5">
                        <p className="small text-muted mb-1">Property Id</p>
                        <p className="mb-0 ">{property.property_id}</p>
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
                    </div>
                    <div className="d-flex pt-1">
                    <Button className=" me-1 flex-grow-1"
                          variant={propertyStatus[property.property_id] ? "outline-danger" : "outline-success"}
                          onClick={() => handleToggleMarketplace(property.property_id)}
                        >
                          {propertyStatus[property.property_id] ? "Remove from Marketplace" : "Add to Marketplace"}
                        </Button>
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
    
  );
};

export default AgentDashboard;


