// import React from 'react'

// export default function UserDashboard() {
//   return (
//     <div>
//       userDasboard
//     </div>
//   )
// }




import React, { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import {userId} from '../../App';

const UserDashboard = ({userId, setUserId, setUserType}) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [isAddingProperty, setAddingProperty] = useState(false);

  //const [username, setUsername] = useState('user_1');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setaddress] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [editProfileErrorMessage, setEditProfileErrorMessage] = useState("");


  const [propertyName, setPropertyName] = useState('');
  const [propertyPrice, setPropertyPrice] = useState('');
  const [location, setlocation] = useState('');
  const [size, setSize] = useState('');
  const [propertyErrorMessage, setPropertyErrorMessage] = useState("");
  //const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleEditProfile = () => {
    setEditingProfile(true);
  };

  const handleSaveProfile = () => {
    if (name && password && confirmPassword && number && address && email) {
      if (password === confirmPassword) {
        const userData = {
          user_id: userId,
          name: name,
          email: email,
          password: password,
          phone: number,
          address: address,
        };

        axios
          .post("http://127.0.0.1:8000/api/edit_access/user_edit", userData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // setUserType(response.data["data"].type)

            if (response.status === 201) {
              // Registration was successful
              setUserId(response.data.data.user_id)
              setUserType(response.data.data.type);
              console.log("Registration was successful.");
              setEditingProfile(false);
              console.log(response.data["data"].type);
              // You can perform actions based on success, such as redirecting to the dashboard
              
            } else {
              // Handle other HTTP status codes as needed
              console.error(
                "Registration failed with status code:",
                response.status
              );
            }
          })
          .catch((error) => {
            // Handle any network or server errors
            console.error("Network/server error:", error);
          })
          .finally(() => {
            // This block will execute whether the request is successful or fails
            setpassword('');
            setconfirmPassword('');
            setEditingProfile(false);
          });
      } else {
        setEditProfileErrorMessage(
          <div style={{ color: "red" }}>Passwords do not match</div>
        );
      }
    } else {
      setEditProfileErrorMessage(
        <div style={{ color: "red" }}>All fields are required</div>
      );
    }
  };
    

  const handleAddProperty = () => {
    setAddingProperty(true);
  };

  const handleSaveProperty = () => {
    if (propertyName && propertyPrice && location && size) {
      const propertyData = {
        user_id : userId,
        property_name : propertyName,
        property_price : propertyPrice,
        property_location : location,
        property_size : size,
      };

      axios
          .post("http://127.0.0.1:8000/api/property/create_property", propertyData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // setUserType(response.data["data"].type)
            
            if (response.status === 201) {
              // Registration was successful
              //setUserType(response.data.data.type);
              console.log("Registration was successful.");

              console.log(response.data["data"].type);
              // You can perform actions based on success, such as redirecting to the dashboard
              setAddingProperty(false);
            } else {
              // Handle other HTTP status codes as needed
              console.error(
                "Registration failed with status code:",
                response.status
              );
            }
          })
          .catch((error) => {
            // Handle any network or server errors
            console.error("Network/server error:", error);
          });
        } else {
          setPropertyErrorMessage(
            <div style={{ color: "red" }}>All fields are required</div>
          );
        }
      };

      return (
        <div className="bg-light p-4 mb-4 rounded-lg">
          <h1 className="text">Dashboard</h1>
          <p>{userId}</p>
          <Row className="mt-4">
            <Col>
              {!isEditingProfile && (
                <Button variant="primary" className="w-90" onClick={handleEditProfile}>
                  Edit Profile
                </Button>
              )}
            </Col>
          </Row>
    
          {isEditingProfile && (
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formconfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </Form.Group>
              {editProfileErrorMessage && (
                <div className="error-message">{editProfileErrorMessage}</div>
              )}
              
              <Button variant="success" onClick={handleSaveProfile} className="mt-3">
                Save Profile
              </Button>
            </Form>
          )}
    
          <div className="mt-4">
            <h2>My Properties</h2>
            {!isAddingProperty && (
              <Button variant="primary" className="w-100" onClick={handleAddProperty}>
                Add Property
              </Button>
            )}
          </div>
    
          {isAddingProperty && (
            <Form className="mt-4">
              <Form.Group controlId="formPropertyName">
                <Form.Label>Property Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter property name"
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPropertyPrice">
                <Form.Label>Property price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter property price"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formlocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter property location"
                  value={location}
                  onChange={(e) => setlocation(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formSize">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  required
                />
              </Form.Group>
              {propertyErrorMessage && (
                <div className="error-message">{propertyErrorMessage}</div>
              )}
              <Button variant="success" onClick={handleSaveProperty} className="mt-3">
                Save Property
              </Button>
            </Form>
          )}
        </div>
      );
    };
    
    export default UserDashboard;