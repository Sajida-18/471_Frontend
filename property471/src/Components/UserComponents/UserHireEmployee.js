import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./hiremodal.css";

const UserHireEmployee = ({ userId, setUserId }) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployeeId, setselectedEmployeeId] = useState(null);
  const [selectedEmployeeType, setselectedEmployeeType] = useState(null);
  const [userProperties, setUserProperties] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState('');
  const [state, setState] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // PropertySelectionModal component
  const PropertySelectionModal = ({ isOpen, onClose, onAction, isHiring, children }) => {
    const actionButtonText = isHiring ? 'Hire' : 'Remove';

    return (
      <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{isHiring ? 'Select Property' : 'Select Property to Remove'}</h2>
            <button onClick={onAction}>{actionButtonText}</button>
          </div>
          <div className="modal-body">
            {children}
            <div className="select-dropdown">
              <label htmlFor="propertyId">Property ID: </label>
              <select
                id="propertyId"
                value={selectedPropertyId}
                onChange={(e) => setSelectedPropertyId(e.target.value)}
              >
                <option value="" disabled> Select a property</option>
                {userProperties.map((property) => (
                  <option key={property.property_id} value={property.property_id}>
                    {property.property_id}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/get_data/employee_data")
      .then((response) => {
        setEmployeeData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error.message);
      });
  }, []);

  const fetchUserProperties = () => {
    axios.post("http://127.0.0.1:8000/api/get_data/user_property", { user_id: userId })
      .then((response) => {
        if (response.status === 200) {
          setUserProperties(response.data.data);
          setIsModalOpen(true);
        } else {
          console.error("Failed to fetch user properties with status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Network/server error while fetching user properties:", error);
      });
  };

  const handleHireClick = (employee) => {
    console.log(`Hire button clicked for employee ${employee.type}`);
    setselectedEmployeeId(employee.employee_id);
    setselectedEmployeeType(employee.type);
    setState("hire")
    fetchUserProperties();
  };

  const handleRemoveClick = (employee) => {
    console.log(`Remove button clicked for employee ${employee.type}`);
    setselectedEmployeeId(employee.employee_id);
    setselectedEmployeeType(employee.type);
    setState("remove")
    fetchUserProperties();
  };

  const handleHireEmployee = () => {
    if (selectedEmployeeId && selectedPropertyId) {
      const requestData = {
        property_id: selectedPropertyId,
      };
  
      if (selectedEmployeeType === 'agent') {
        // console.log(selectedEmployeeId.type)
        requestData.agent_id = selectedEmployeeId;
      } else {
        requestData.support_id = selectedEmployeeId;
      }
  
      const apiUrl = selectedEmployeeType === 'agent'
        ? 'http://127.0.0.1:8000/api/hire_employee/hire_agent'
        : 'http://127.0.0.1:8000/api/hire_employee/hire_support';
  
      axios.post(apiUrl, requestData)
        .then((response) => {
          if (response.status === 201) {
            console.log(`Hiring successful for employee ${selectedEmployeeId}`);
            // Additional logic if needed
          } else {
            console.error(`Failed to hire employee ${selectedEmployeeId} with status code:`, response.status);
          }
          // Reset state and close the modal
          handleModalClose();
        })
        .catch((error) => {
          console.error("Network/server error while hiring employee:", error);
          // Reset state and close the modal
          handleModalClose();
        });
    } else {
      console.error("Selected employee or property is missing.");
      // Handle the error as needed
    }
  };
  

  const handleRemoveEmployee = () => {
    if (selectedEmployeeId && selectedPropertyId) {
      const requestData = {
        property_id: selectedPropertyId,
        employee_id: selectedEmployeeId,
      };

      axios.post('http://127.0.0.1:8000/api/remove/remove_employee', requestData)
        .then((response) => {
          if (response.status === 200) {
            console.log(`Removal successful for employee ${selectedEmployeeId}`);
          } else {
            console.error(`Failed to remove employee ${selectedEmployeeId} with status code:`, response.status);
          }
          // Reset state and close the modal
          handleModalClose();
        })
        .catch((error) => {
          console.error("Network/server error while removing employee:", error);
          // Reset state and close the modal
          handleModalClose();
        });
    } else {
      console.error("Selected employee or property is missing.");
      // Handle the error as needed
    }
  };

  const handleModalClose = () => {
    setselectedEmployeeId(null);
    setselectedEmployeeType(null);
    setSelectedPropertyId('');
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 align="center">Hire Agents & Support</h1>

      <div>
        <table className="table">
          <thead>
            <tr align="center">
              <th scope="col"></th>
              <th scope="col">ID</th>
              <th scope="col">JOB</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">HIRE</th>
              <th scope="col">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employeeData) ? (
              employeeData.map((employee) => (
                <tr align="center" key={employee.employee_id}>
                  <td></td>
                  <td>{employee.employee_id}</td>
                  <td>{employee.type}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleHireClick(employee)}
                    >
                      Hire
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveClick(employee)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No employee data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <PropertySelectionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onAction={state === 'hire' ? handleHireEmployee : handleRemoveEmployee}
        isHiring={state === 'hire'}
      >
      </PropertySelectionModal>
    </div>
  );
};

export default UserHireEmployee;
