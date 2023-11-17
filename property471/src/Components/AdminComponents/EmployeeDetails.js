
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
      employee details for admin
    </div>
  )
}
