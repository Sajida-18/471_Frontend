

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const HireEmployee = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const navigate = useNavigate();

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
    
  const handleHireClick = (employeeId) => {
    // Handle the hire button click for a specific employee
    console.log(`Hire button clicked for employee ${employeeId}`);
    navigate("/signupLogin")

   
  };

  return (
    // <div className="container mt-5" style={{ backgroundColor: '#FAFAD2' }}>
    <div>
      <h1 align="center">Hire Agents & Support</h1>

      <div>
        <table className="table" >
          <thead>
            <tr align="center">
            <th scope="col"></th>
              <th scope="col">JOB</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">HIRE</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employeeData) ? (
              employeeData.map((employee) => (
                <tr align="center" key={employee.employee_id}>
                  <td></td>
                  <td>{employee.type}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleHireClick(employee.employee_id)}
                      >
                        Hire
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
    // </div>
    
  );
};

export default HireEmployee;


