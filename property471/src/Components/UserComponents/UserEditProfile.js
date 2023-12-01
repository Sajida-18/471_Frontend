import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import UserDashboard from './UserDashboard';

const UserEditProfile = ({ userId, setUserImagePath}) => {
  // const [isEditingProfile, setEditingProfile] = useState(false);
  

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [editProfileErrorMessage, setEditProfileErrorMessage] = useState('');

  const [profilePicture, setProfilePicture] = useState(null);

  

 
  const navigate = useNavigate();
  const handleSaveProfile = async () => {
    try {
      if (name && password && confirmPassword && number && address && email) {
        if (password === confirmPassword) {
          const formData = new FormData();
          formData.append('user_id', userId);
          formData.append('name', name);
          formData.append('email', email);
          formData.append('password', password);
          formData.append('phone', number);
          formData.append('address', address);
          formData.append('user_image', profilePicture);
  
          const response = await axios.post(
            'http://127.0.0.1:8000/api/edit_access/user_edit',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
  
          console.log(response.data);
          if (response.status === 201) {
            console.log('Profile update was successful.');
  
            const response2 = await axios.post(
              'http://127.0.0.1:8000/api/get_data/single_user',
              { user_id: userId }
            );
  
            setUserImagePath(response2.data.data.user_image_path);
            const userType = response2.data.data.type;

            // Conditionally navigate based on user type
            if (userType === 'user') {
              navigate('/UserDashboard');
            } else if (userType === 'agent') {
              console.log(response2.data.data.user_image_path)
              navigate('/AgentDashboard');
            } 
            
          } else {
            console.error(
              'Profile update failed with status code:',
              response.status
            );
          }
        } else {
          setEditProfileErrorMessage(
            <div style={{ color: 'red' }}>Passwords do not match</div>
          );
        }
      } else {
        setEditProfileErrorMessage(
          <div style={{ color: 'red' }}>All fields are required</div>
        );
      }
    } catch (error) {
      console.error('Network/server error:', error);
    }
  };
  

  return (
    <div className="bg-light p-4 mb-4 rounded-lg">
      <div className='container'>
      <h1 className="text">Edit Profile</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
           Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
    
      
        <div className="mb-3">
          <label htmlFor="Number" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            />
        </div>
      
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
        </label>
      <input
        type="text"
        className="form-control"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div>
      
      <div className="mb-3" >
      <label htmlFor="address" className="form-label">
        Address
        </label>
      <input
        type="text"
        className="form-control"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      </div>
 

      <div className="mb-3">
      <label htmlFor="password"  className="form-label">
        Password
        </label>
      <input
        type="text"
        className="form-control"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>

      <div className="mb-3">
      <label htmlFor="confirmPassword"  className="form-label">
        Confirm Password
        </label>
      <input
        type="text"
        id="confirmPassword"
        className="form-control"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      </div>

      <div className="mb-3">
      <label htmlFor="profilePicture" className="form-label">
        Profile Picture
        </label>
      <input
        type="file"
        className="form-control"
        id="profilePicture"
        onChange={(e) => setProfilePicture(e.target.files[0])}
      />
      </div>

      {editProfileErrorMessage && (
        <div className="error-message">{editProfileErrorMessage}</div>
      )}

      <Button variant="success" onClick={handleSaveProfile} className="mt-3">
        Save Profile
      </Button>
      </form>
    </div>
   </div>
  );
};

export default UserEditProfile;
