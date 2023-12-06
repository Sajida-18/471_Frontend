
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PropertyDetails = ({propertyId}) => {

  const [propertyData, setPropertyData] = useState({});

  const fetchPropertyData = () => {
    axios.post("http://127.0.0.1:8000/api/get_data/single_property", { property_id: propertyId })
      .then((response) => {
        console.log(`${propertyId} page`)
        if (response.status === 200) {
          console.log(response.data.data)
          setPropertyData(response.data.data);
        } else {
          console.error("Failed to fetch property data with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error(`${propertyId} page`)
        console.error("Network/server error while fetching property data:", error);
      });
  };

  useEffect(() => {
    fetchPropertyData();
  }, [propertyId]); 

  return (
    <section className="h-100 gradient-custom-2">
      <div className="container-fluid p-0 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col=12">
            <div className="card">
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#d9f2e4', height: '230px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="Generic placeholder image"
                    className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: '150px', zIndex: 1 }}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    data-mdb-ripple-color="dark"
                    style={{ zIndex: 1 }}
                  >
                    Buy
                  </button>
                </div>
                <div className="p-4 text-black" style={{ marginTop: '130px' }}>
                  <h5>{propertyData.property_name}</h5>
                  <p>{propertyData.property_location}</p>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#d9f2e4' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">{propertyData.property_price}</p>
                    <p className="small text-muted mb-0">Price</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">{propertyData.property_size}</p>
                    <p className="small text-muted mb-0">Size</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">{propertyData.agent_id}</p>
                    <p className="small text-muted mb-0">Agent</p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4 text-black">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#d9f2e4' }}>
                    <p className="font-italic mb-1">Web Developer</p>
                    <p className="font-italic mb-1">Lives in New York</p>
                    <p className="font-italic mb-0">Photographer</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">All photos</p>
                  <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                </div>
                <div className="row g-2">
                  <div className="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </div>
                  <div className="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
