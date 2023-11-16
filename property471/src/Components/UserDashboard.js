import React, { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [isAddingProperty, setAddingProperty] = useState(false);

  const [username, setUsername] = useState('user0001');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const [propertyName, setPropertyName] = useState('');
  const [propertyPrice, setPropertyPrice] = useState('');
  const [address, setAddress] = useState('');
  const [size, setSize] = useState('');
  //const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleEditProfile = () => {
    setEditingProfile(true);
  };

  const handleSaveProfile = () => {
    // Perform save logic (e.g., API request to update user profile)
    setEditingProfile(false);
  };

  const handleAddProperty = () => {
    setAddingProperty(true);
  };

  const handleSaveProperty = () => {
    // Perform save logic (e.g., API request to save property details)
    // After saving, navigate back to the main dashboard
    setAddingProperty(false);
  };

  return (
    <Container>
      <div className="bg-light p-4 mb-4 rounded-lg">
        <h1 className="text">Dashboard</h1>
        <p>{username}</p>
        <Row className="mt-4">
          <Col>
            {!isEditingProfile && (
              <Button variant="primary" className="w-90" onClick={handleEditProfile}>
                Edit Profile
              </Button>
            )}
          </Col>
        </Row>
      </div>

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
          <Button variant="success" onClick={handleSaveProfile} className="mt-3">
            Save Profile
          </Button>
        </Form>
      )}

      <div className="mt-4">
        <h2>Your Properties</h2>
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
            />
          </Form.Group>
          <Form.Group controlId="formPropertyPrice">
            <Form.Label>Property price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter property price"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter property location"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formSize">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" onClick={handleSaveProperty} className="mt-3">
            Save Property
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default UserDashboard;

