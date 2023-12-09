
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const PropertyDetails = ({ propertyId, userId }) => {
  const [propertyData, setPropertyData] = useState({});
  const [userPass, setUserPass] = useState('');
  const [userWallet, setUserWallet] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const fetchUserData = () => {
    axios
      .post("http://127.0.0.1:8000/api/get_data/single_user", { user_id: userId })
      .then((response) => {
        if (response.status === 200) {
          setUserPass(response.data.data.password);
          setUserWallet(response.data.data.wallet);
        } else {
          console.error("Failed to fetch user data with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Network/server error while fetching user data:", error);
      });
  };

  const fetchPropertyData = () => {
    axios
      .post("http://127.0.0.1:8000/api/get_data/single_property", { property_id: propertyId })
      .then((response) => {
        console.log(`${userId} page`);
        if (response.status === 200) {
          setPropertyData(response.data.data);
        } else {
          console.error("Failed to fetch property data with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error(`${propertyId} page`);
        console.error("Network/server error while fetching property data:", error);
      });
  };

  const handleBuyClick = () => {
    setError('');
    handleShow();
  };

  const handleConfirmClick = () => {
    if (enteredPassword === userPass) {
      console.log(userId);
      // Call the payment API
      axios.post("http://127.0.0.1:8000/api/payment/ask_approval", {
        property_id: propertyId,
        buyer_id: userId
      })
      .then((response) => {
        console.log("HOYE NA KEN")
        if (response.status === 201) {
          console.log("Request sent!");
          handleClose();
        } else if (response.status === 202) {
          alert("You don't have sufficient balance");
        } else {
          console.error("Failed to send payment request with status code:", response.status);
        }
      })
      .catch((error) => {
        alert("You don't have sufficient balance");
        console.error("Network/server error while sending payment request:", error);
      });
    } else {
      setError('Incorrect password');
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchPropertyData();
  }, [propertyId, userId]);

  return (
    <section className="h-100 gradient-custom-2">
      <div className="container-fluid p-0 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card">
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#d9f2e4', height: '230px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <img
                    src='https://media.discordapp.net/attachments/1165504181126320249/1180218866731864217/property_stock.png?ex=657c9f79&is=656a2a79&hm=3c307248e3fcf4571245743e3ee2a17f0f5d1129fede908d289cd04105fb45ab&=&format=webp&quality=lossless&width=468&height=468'
                    alt="Generic placeholder "
                    className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: '150px', zIndex: 1 }}
                    />
                    {propertyData.admin_approval === "False" ? (
                      // "Booked" button if admin_approval is "False"
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        style={{ zIndex: 1 }}
                        disabled
                      >
                        Booked
                      </button>
                    ) : (
                      // "Buy" button if admin_approval is not "False"
                      <button
                        type="button"
                        className={`btn btn-outline-success ${userId === propertyData.user_id ? 'disabled' : ''}`}
                        style={{ zIndex: 1 }}
                        onClick={userId !== propertyData.user_id ? handleBuyClick : null}
                      >
                        Buy
                      </button>
                    )}
                  </div>
                <div className="p-4 text-black" style={{ marginTop: '130px' }}>
                  <h5>{propertyData.property_name}</h5>
                  <p>{propertyData.property_location}</p>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#d9f2e4' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">Price</p>
                    <p className="small text-muted mb-0">{propertyData.property_price}</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">Size</p>
                    <p className="small text-muted mb-0">{propertyData.property_size}</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">Owner</p>
                    <p className="small text-muted mb-0">{propertyData.user_id}</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">Agent</p>
                    <p className="small text-muted mb-0">{propertyData.agent_id}</p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4 text-black">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#d9f2e4' }}>
                    <p className="font-italic mb-1">
Discover a curated selection of upscale properties, ranging from chic urban apartments to secluded villas
 in picturesque settings. Our portfolio caters to diverse lifestyles, offering elegant interiors, 
cutting-edge amenities, and personalized services for an elevated living experience.</p>
  
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">All photos</p>
                </div>
                <div className="row g-2">
                  <div className="col mb-2">
                    <img
                      src="https://static.baranselgrup.com/nwm-248899-w1278-bavadi-villalari.png"
                      alt="1"
                      className="w-100 rounded-3"
                    />
                  </div>
                  <div className="col mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="2"
                      className="w-100 rounded-3"
                    />
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col">
                    <img
                      src="https://static.baranselgrup.com/nwm-153195-w640-luks-villalar.png"
                      alt="3"
                      className="w-100 rounded-3"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="https://media-feed.resales-online.com/live/ShowFeedImage.asp?SecId=cc325d34320211eea7b50217bc231ef4&Id=P1&ImgId=X1002328&z=1691085400"
                      alt="4"
                      className="w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Confirm Payment */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Total Amount: {parseInt(propertyData.property_price) + parseInt(propertyData.property_price * 0.1)}</p>

          <p>10% Transaction fee</p>
          <Form>
            <Form.Group controlId="formPassword">
              <Form.Label>Enter Password to Confirm Transaction</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
          {error && <p className="text-danger">{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="success" onClick={handleConfirmClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default PropertyDetails;