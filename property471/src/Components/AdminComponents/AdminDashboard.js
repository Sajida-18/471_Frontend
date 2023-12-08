

import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = ({ userId, setUserId, setUserType, userImagePath }) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [isAddingProperty, setAddingProperty] = useState(false);
  const [userData, setUserData] = useState({});
 
  const navigate = useNavigate();

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

  return (
   
    <div className="  p-4 mb-4 rounded-lg" style={{backgroundColor:"white"}}>
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
   

  );
};
export default AdminDashboard;