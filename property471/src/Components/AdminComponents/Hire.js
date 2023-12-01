import React, { useState } from 'react';
import axios from 'axios';

const CreateEmployeePage = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [jobType, setJobType] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateEmployee = () => {
    // Assuming you have a Django backend endpoint for creating an employee
    const apiUrl = 'http://127.0.0.1:8000/api/signup_login/create_employee';

    const employeeData = {
      name:employeeName,
      type:jobType,
      password:password,
      email:email,
      address:address,
      phone:phone,
    };

    axios
      .post(apiUrl, employeeData)
      .then((response) => {
        if (response.status === 201) {
          setSuccessMessage('Employee created!');
          setErrorMessage('');
          // Clear form fields
          setEmployeeName('');
          setJobType('');
          setPassword('');
          setEmail('');
          setAddress('');
          setPhone('');
        } else {
          setSuccessMessage('');
          setErrorMessage('Error creating employee');
        }
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Error creating employee');
        console.error('Error creating employee:', error);
      });
  };

  return (
    <div  style={{ backgroundColor: '#F0FFF0' }}>
    <div className="container ">
      <h1 className="mb-4">Create Employee Account</h1>
      {successMessage && <p className="text-success mt-3">{successMessage}</p>}
      {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
      <form>
        <div className="mb-3">
          <label htmlFor="employeeName" className="form-label">
            Employee Name
          </label>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="jobType" className="form-label">
            Job Type
          </label>
          <input
            type="text"
            className="form-control"
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleCreateEmployee}
        >
          Create Employee
        </button>
      </form>

      
    </div>
    </div>
  )
}
export default CreateEmployeePage;
