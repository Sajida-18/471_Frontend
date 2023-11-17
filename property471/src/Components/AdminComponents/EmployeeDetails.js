
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDetails = () => {
  const [employeeData, setEmployeeData] = useState([]);

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

  return (
    <div>
      <h1 align="center">Employee Details</h1>

      <div>
        <table className="table">
          <thead>
            <tr align="left">
              <th scope="col">EMPLOYEE_ID</th>
              <th scope="col">JOB</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ADDRESS</th>
              <th scope="col">PHONE</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employeeData) ? (
              employeeData.map((employee) => (
                <tr key={employee.employee_id}>
                  <td>{employee.employee_id}</td>
                  <td>{employee.type}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.phone}</td>
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






 

