import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [userType, setUserType] = useState(props.userType);

  useEffect(() => {
    // Update the userType when props.userType changes
    setUserType(props.userType);
  }, [props.userType]);

  // Define the navigation items based on the user type
  const navItems = {
    admin: [
      { label: 'Admin Dashboard', path: '/Dashboard' },
      { label: 'Transaction', path: '/' },
      { label: 'Hire', path: '/' },
      { label: 'Logout', path: '/' },
    ],
    agent: [
      { label: 'Agent Dashboard', path: '/Dashboard' },
      { label: 'Marketplace', path: '/' },
      { label: 'Offers', path: '/' },
      { label: 'Notification', path: '/' },
      { label: 'Logout', path: '/' },
    ],
    user: [
      { label: 'User Dashboard', path: '/Dashboard' },
      { label: 'Marketplace', path: '/' },
      { label: 'Notification', path: '/' },
      { label: 'Logout', path: '/SignupLogin' },
    ],
    default: [
      { label: 'Marketplace', path: '/' },
      { label: 'Hire Employee', path: '/' },
      { label: 'Signup/Login', path: '/SignupLogin' },
    ],
  };

  const userTypeNavItems = navItems[userType] || navItems.default;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* ... Your existing JSX */}
      <div className="container-fluid">
         <Link className="navbar-brand text-white" to="/">Property471</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
       
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {userTypeNavItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link to={item.path} className="nav-link text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* ... Your existing search form */}
        <form className="d-flex" role="search">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
             <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;