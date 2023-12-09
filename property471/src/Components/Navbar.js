



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Icon } from '@iconify/react';


function Navbar(props) {
  const [userType, setUserType] = useState(props.userType);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [walletInfo, setWalletInfo] = useState(null);

  useEffect(() => {
    if (isLoggedIn && ['user', 'agent', 'admin'].includes(userType)) {
      axios
        .post('http://127.0.0.1:8000/api/get_data/single_user', { user_id: props.userId })
        .then((response) => {
          
          const userWalletInfo = response.data.data.wallet;
          setWalletInfo(userWalletInfo);
        })
        .catch((error) => {
          console.error('Error fetching wallet information:', error);
        });
    }
  }, [isLoggedIn, userType, props.userId]);


  useEffect(() => {
    
    setUserType(props.userType);
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, [props.userType, props.userId]);

  const handleLogout = () => {
   
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    console.log(props.userId)
    
    axios
      .post('http://127.0.0.1:8000/api/signup_login/logout', { "user_id": props.userId })
      .then((response) => {
        
        console.log('Logout successful.');
        props.setUserType('');
        props.setUserId('');
        props.setUserImagePath('');
        navigate("/");
      })
      .catch((error) => {
        
        console.error('Logout error:', error);
      });
  };
  const handleLogin = () => {
        
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        
      };

  
  const navItems = {
    admin: [
      { label: 'Admin Dashboard', path: '/AdminDashboard' },
      { label: 'Transactions', path: '/Transaction' },
      { label: 'Marketplace', path: '/AdminMarketPlace' },
      { label: 'Hire', path: '/Hire' },
      { label: 'Earnings', path: '/EarningDetails' },
      { label: 'Employees', path: '/EmployeeDetails' },
      { label: 'Users', path: '/UserDetails' },
      { label: 'Logout', path: '/', onClick: handleLogout },
    ],
    agent: [
      { label: 'Agent Dashboard', path: '/AgentDashboard' },
      { label: 'Marketplace', path: '/AgentMarketplace' },
      { label: 'Logout', path: '/', onClick: handleLogout },
    ],
    user: [
      { label: 'User Dashboard', path: '/UserDashboard' },
      { label: 'Marketplace', path: '/UserMarketPlace' },
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
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#4ea685" }}>
    
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
                <Link to={item.path} className="nav-link text-white" onClick={item.onClick} >
                {item.label}
                  </Link>
                </li>
            ))}
            {/* <div className='navbar text-white'>
               {props.userId}
            </div> */}
            </ul>
          
          
          </div>
          <div>
          {['user','agent','admin'].includes(userType) && (
              <div className='navbar text-black px-2' style={{backgroundColor:"white" ,borderRadius: '15px'}}>
               
              <Icon icon="et:wallet" />
               <h>wallet: {walletInfo} </h>
                </div>
             )}
          </div>
      </div>
    </nav>
  );
}

export default Navbar;




