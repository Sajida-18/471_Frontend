



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Navbar(props) {
  const [userType, setUserType] = useState(props.userType);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [userId, setUserId] = useState(props.userId);
  const navigate = useNavigate();

  useEffect(() => {
    // Update the userType, isLoggedIn, and userId when props change
    setUserType(props.userType);
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    //setUserId(props.userId);
  }, [props.userType, props.userId]);

  const handleLogout = () => {
    // Perform logout actions and update the state
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    console.log(props.userId)
    // Call the logout API with the user_id
    axios
      .post('http://127.0.0.1:8000/api/signup_login/logout', { "user_id": props.userId })
      .then((response) => {
        // Handle the response as needed
        console.log('Logout successful.');
        navigate("/");
      })
      .catch((error) => {
        // Handle any network or server errors
        console.error('Logout error:', error);
      });
  };
  const handleLogin = () => {
        // Perform login actions and update the state
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        // Additional login logic if needed
      };

  // Define the navigation items based on the user type and login status
  const navItems = {
    admin: [
      { label: 'Admin Dashboard', path: '/AdminDashboard' },
      { label: 'Transaction', path: '/Transaction' },
      { label: 'Hire', path: '/Hire' },
      { label: 'Employee Details', path: '/EmployeeDetails' },
      { label: 'Logout', path: '/', onClick: handleLogout },
    ],
    agent: [
      { label: 'Agent Dashboard', path: '/AgentDashboard' },
      { label: 'Marketplace', path: '/AgentMarketplace' },
      { label: 'Offers', path: '/Offers' },
      { label: 'Notification', path: '/AgentNotification' },
      { label: 'Logout', path: '/', onClick: handleLogout },
    ],
    user: [
      { label: 'User Dashboard', path: '/UserDashboard' },
      { label: 'Marketplace', path: '/UserMarketPlace' },
      { label: 'Notification', path: '/UserNotification' },
      { label:  'Hire employee', path: '/UserHireEmployee'},
      { label: 'Logout', path: '/', onClick: handleLogout },
    ],
    default: [
      { label: 'Marketplace', path: '/MarketPlace' },
      { label: 'Hire Employee', path: '/HireEmployee' },
      { label: 'Signup/Login', path: '/SignupLogin', onClick: handleLogin },
    ],
  };

  const userTypeNavItems = isLoggedIn ? navItems[userType] || navItems.default : navItems.default;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Property471
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {userTypeNavItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link to={item.path} className="nav-link text-white" onClick={item.onClick}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




