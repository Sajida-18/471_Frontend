// import React from 'react'

// export default function UserDashboard() {
//   return (
//     <div>
//       userDasboard
//     </div>
//   )
// }




import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import {userId} from '../../App';

const AgentDashboard = ({userId, setUserId, setUserType}) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  //const [username, setUsername] = useState('user_1');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setaddress] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [editProfileErrorMessage, setEditProfileErrorMessage] = useState("");


  const [userProperties, setUserProperties] = useState([]);

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
        console.log(userData)
        axios
          .post("http://127.0.0.1:8000/api/edit_access/user_edit", userData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            //setUserType(response.data["data"].type)
            console.log(response.data)
            console.log(response.status)

            if (response.status === 201) {
              // Registration was successful
              // setUserId(response.data.data.user_id)
              
              // setUserType(response.data.data.type);
              console.log("Registration was successful.");
              setEditingProfile(false);
              navigate("/AgentDashboard")
              // console.log(response.data["data"].type);
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
          // .finally(() => {
          //   // This block will execute whether the request is successful or fails
          //   setpassword('');
          //   setconfirmPassword('');
          //   setEditingProfile(false);
          // });
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
    

      // Function to fetch user-specific properties
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
    fetchUserProperties();
  }, []); // Empty dependency array means this effect runs once on mount

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
            <h2>Properties</h2>
            
        {/* Display user-specific properties in cards */}
        {userProperties.map(property => (
          <Card key={property.property_id}>
            <Card.Body>
              <Card.Title>{property.property_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{property.location}</Card.Subtitle>
              <Card.Text>Price: {property.property_price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
        </div>
      );
    };
    
    export default AgentDashboard;