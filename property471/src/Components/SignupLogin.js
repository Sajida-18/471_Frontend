

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './SignupLogin.css'; // Import your CSS file

function SignupLogin() {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignUp = () => {
    // You can add password validation here
    const password = document.getElementById('password').value;
    if (password) {
      navigate('/dashboard');
    } else {
      // Password not provided, you can show an error message or handle it as needed.
      alert('Please provide a password');
    }
  }

  return (
    <div>
      <div className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        {/* FORM SECTION */}
        <div className="row">
          {/* SIGN UP */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="email" placeholder="Email" required/>
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input id="password" type="password" placeholder="Password" required />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="password" placeholder="Confirm password" required />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="Phone" placeholder="Phone" required />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="Address" placeholder="Address" required />
                </div>
                <button onClick={handleSignUp}>
                  Sign Up
                  {/* Sign up */}
                </button>
                {/* ... (rest of the sign-up section) */}
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN UP */}
          {/* SIGN IN */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="password" placeholder="Password" />
                </div>
                <button onClick={handleSignUp}>
                  Sign in
                  {/* Sign in */}
                </button>
                {/* ... (rest of the sign-in section) */}
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper">
            </div>
          </div>
          {/* END SIGN IN */}
        </div>
        {/* END FORM SECTION */}
        {/* CONTENT SECTION */}
        <div className="row content-row">
          {/* SIGN IN CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in">
            </div>
          </div>
          {/* END SIGN IN CONTENT */}
          {/* SIGN UP CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="img sign-up">
            </div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
          {/* END SIGN UP CONTENT */}
        </div>
        {/* END CONTENT SECTION */}
      </div>
    </div>
  );
}

export default SignupLogin;