

import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = ({ userId, setUserId, setUserType, userImagePath, setPropertyId, propertyId }) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [isAddingProperty, setAddingProperty] = useState(false);
  const [userData, setUserData] = useState({});
  const [userProperties, setUserProperties] = useState([]);
  const navigate = useNavigate()
 

  const handleEditProfile = () => {
    setEditingProfile(true);
    navigate("/UserEditProfile");
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
  useEffect(() => {
    fetchUserData();
  }, [userId]); 

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/get_data/needs_admin_approval')
      .then(response => {
        console.log(response.data.data);
        setUserProperties(response.data.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setUserProperties([]); // set to an empty array or handle the error appropriately
      });
  }, []);
   
  const handleViewDetails = (propertyid) => {
    console.log(propertyid);
    setPropertyId(propertyid);
    console.log(`${propertyId} page`);
    navigate(`../PropertyDetails/`);
    // Redirect to PropertyDetails page or perform navigation as needed
    // Example using React Router: history.push('/PropertyDetails');
  };

  const handleApprove = (propertyid, buyerid) => {
    axios
      .post("http://127.0.0.1:8000/api/payment/give_approval", {
        property_id: propertyid,
        buyer_id: buyerid,
      })
      .then((response) => {
        console.log(buyerid);
        if (response.status === 201) {
          console.log("Approved");
          // You might want to update your local state or fetch data again if needed
          setUserProperties((prevProperties) => prevProperties.filter(property => property.property_id !== propertyid));
        } else if (response.status === 202) {
          alert("Insufficient balance");
        } else {
          console.error("Failed to approve with status code:", response.status);
        }
      })
      .catch((error) => {
        alert("Insufficient balance");
        console.error("Network/server error while approving:", error);
      });
  };
  
  const handleReject = (propertyid) => {
    axios
      .post("http://127.0.0.1:8000/api/payment/reject_approval", {
        property_id: propertyid,
      })
      .then((response) => {
        console.log(propertyid);
        if (response.status === 201) {
          console.log("Rejected");
          // You might want to update your local state or fetch data again if needed
          setUserProperties((prevProperties) => prevProperties.filter(property => property.property_id !== propertyid));
        } else if (response.status === 202) {
          alert("hoye nai reject");
        } else {
          console.error("Failed to reject with status code:", response.status);
        }
      })
      .catch((error) => {
        alert("hoye nai reject");
        console.error("Network/server error while rejecting:", error);
      });
  };
  

  return (
    <>
    <div className="  p-4 mb-4 rounded-lg" >
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
      </div>
      <div className="mt-4">
        {Array.isArray(userProperties) &&  userProperties.map(property => (
          <div className="col-sm-12" key={property.property_id}>
          <div className=' py-4 px-1 h-10'>
          <div className="card" style={{ borderRadius: '15px', width: 'flex', backgroundColor: '#FFFFFF' }}>
            <div className="card-body p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                    <img
                      src={property.imagePath || 'https://www.indiashotels.com/webadmin/thumbs/863706-622c611d19cc5ffd9618c30d_saptha%20gallery%20images%203.jpg'}
                      alt="Property"
                      className="img-fluid"
                      style={{ width: '180px', borderRadius: '10px' }}
                    />
                    <p className="mb-0"><a  onClick={() => handleViewDetails(property.property_id)} className="text-muted">view details</a></p>
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
                      <div className="px-5">
                      <p className="small text-muted mb-1">Seller_id</p>
                      <p className="mb-0 ">{property.user_id}</p>
                      </div>
                      <div className="px-5">
                      <p className="small text-muted mb-1">Buyer_id</p>
                      <p className="mb-0 ">{property.buyer_id}</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <button type="button" className="btn btn-outline-success me-1 flex-grow-1"  
                      onClick={() => handleApprove(property.property_id, property.buyer_id)}
                     >
                      Approve
                      </button>
                      <button type="button" className="btn btn-outline-danger me-1 flex-grow-1"  
                      onClick={() => handleReject(property.property_id)}
                     >
                      Reject
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
export default AdminDashboard;