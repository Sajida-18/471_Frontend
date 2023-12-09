


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDetails = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [deletionMessage, setDeletionMessage] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/get_data/employee_data")
      .then((response) => {
        console.log(response.data.data);
        setEmployeeData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error.message);
      });
  }, []);

  
  const handleRemoveEmployee= (employeeId) => {
    axios.post('http://127.0.0.1:8000/api/remove/delete_employee ', { employee_id: employeeId })
    
      .then(response => {
        console.log(employeeId)
        console.log('employee removed successfully:', response.data);
        setDeletionMessage(`${employeeId} has been successfully removed.`);
        setTimeout(() => {
          setDeletionMessage(null); // Clear the message after 5 seconds
        }, 5000);
        setEmployeeData(employeeData.filter(employee=> employee.employee_id !== employeeId));
      })
      .catch(error => {
        console.error('Error removing employee:', error);
        setDeletionMessage(`Failed to remove employee ${employeeId}. Please try again.`);
        setTimeout(() => {
          setDeletionMessage(null); // Clear the message after 5 seconds
        }, 5000); // 5000 milliseconds = 5 seconds
      
      });
  };

  return (
    <div>
      <h1 align="center">Employee Details</h1>

      {deletionMessage && (
        <div className="alert alert-success" role="alert">
          {deletionMessage}
        </div>
      )}

      <div>
        <table className="table">
          <thead>
            <tr align="center">
              <th scope="col">EMPLOYEE_ID</th>
              <th scope="col">JOB</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ADDRESS</th>
              <th scope="col">PHONE</th>
              <th scope="col">COMMISSION</th>
              <th scope="col">HIRING_PRICE</th>
              <th scope="col">WALLET</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employeeData) && employeeData.length > 0 ? (
              employeeData.map((employee) => (
                <tr align="center" key={employee.employee_id}>
                  <td>{employee.employee_id}</td>
                  <td>{employee.type}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.commission}</td>
                  <td>{employee.hiring_price}</td>
                  <td>{employee.wallet}</td>

                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleRemoveEmployee(employee.employee_id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No employee data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetails;
