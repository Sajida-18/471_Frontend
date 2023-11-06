// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import './SignupLogin.css'; // Import your CSS file

// function SignupLogin() {
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [signInUsername, setSignInUsername] = useState('');
//   const [signInPassword, setSignInPassword] = useState('');
//   const [signInErrorMessage, setSignInErrorMessage] = useState(''); // Add error message state for sign-in

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [signUpErrorMessage, setSignUpErrorMessage] = useState(''); // Add error message state for sign-up

//   const navigate = useNavigate();

//   const toggle = () => {
//     setIsSignIn(!isSignIn);
//     clearFormFields(); // Clear form fields when switching between sign-in and sign-up
//   };

//   const clearFormFields = () => {
//     setSignInUsername('');
//     setSignInPassword('');
//     setUsername('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     setPhone('');
//     setAddress('');
//     setSignInErrorMessage('');
//     setSignUpErrorMessage('');
//   };

//   const handleSignIn = () => {
//     if (signInUsername && signInPassword) {
//       // Redirect to the dashboard or handle the sign-in logic
//       navigate('/dashboard');
//     } else {
//       // Username or password missing, set an error message
//       setSignInErrorMessage(<div style={{color: "red"}}>Username and password are required</div>);
      
//     }
//   }
  
//   const handleSignUp = () => {
//     if  (username && password && confirmPassword && phone && address && email){
//       if (password === confirmPassword )  {
//         // Passwords match, proceed with sign-up logic
//         navigate('/dashboard');
//       } 
//       else{
//         setSignUpErrorMessage(<div style={{color :"red"}}>Passwords do not match</div>);
//       }
//     }else{
//         setSignUpErrorMessage(<div style={{color :"red"}}>Required</div>);
//     }
//   }

//   return (
//     <div>
//       <div className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
//         <div className="row">
//           <div className="col align-items-center flex-col sign-up">
//             <div className="form-wrapper align-items-center">
//               <div className="form sign-up">
//                 <div className="input-group">
//                   <i className='bx bxs-user'></i>
//                   <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="input-group">
//                   <i className='bx bx-mail-send'></i>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="input-group">
//                   <i className='bx bxs-lock-alt'></i>
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="input-group">
//                   <i className='bx bxs-lock-alt'></i>
//                   <input
//                     type="password"
//                     placeholder="Confirm password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 {signUpErrorMessage && <div className="error-message">{signUpErrorMessage}</div>}
//                 <div className="input-group">
//                   <i className='bx bxs-lock-alt'></i>
//                   <input 
//                   type="Phone" 
//                   placeholder="Phone" 
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required 
//                   />
//                 </div>
//                 <div className="input-group">
//                   <i className='bx bxs-lock-alt'></i>
//                   <input
//                   type="Address" 
//                   placeholder="Address" 
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   required 
//                   />
//                 </div>
//                 <button onClick={handleSignUp}>
//                   Sign Up
//                 </button>
//                 <p>
//                   <span>Already have an account?</span>
//                   <b onClick={toggle} className="pointer">
//                     Sign in here
//                   </b>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col align-items-center flex-col sign-in">
//             <div className="form-wrapper align-items-center">
//               <div className="form sign-in">
//                 <div className="input-group">
//                   <i className='bx bxs-user'></i>
//                   <input
//                     type="text"
//                     placeholder="Username"
//                     value={signInUsername}
//                     onChange={(e) => setSignInUsername(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="input-group">
//                   <i className='bx bxs-lock-alt'></i>
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={signInPassword}
//                     onChange={(e) => setSignInPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 {signInErrorMessage && <div className="error-message">{signInErrorMessage}</div>}
//                 <button onClick={handleSignIn}>
//                   Sign in
//                 </button>
//                 <p>
//                   <b>Forgot password?</b>
//                 </p>
//                 <p>
//                   <span>Don't have an account?</span>
//                   <b onClick={toggle} className="pointer">
//                     Sign up here
//                   </b>
//                 </p>
//               </div>
//             </div>
//             <div className="form-wrapper">
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './SignupLogin.css'; // Import your CSS file
import axios from 'axios';

function SignupLogin() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInErrorMessage, setSignInErrorMessage] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('');

  const navigate = useNavigate();

  const toggle = () => {
    setIsSignIn(!isSignIn);
    clearFormFields();
  };

  const clearFormFields = () => {
    setSignInUsername('');
    setSignInPassword('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
    setAddress('');
    setSignInErrorMessage('');
    setSignUpErrorMessage('');
  };

  const handleSignIn = () => {
    if (signInUsername && signInPassword) {
      // Redirect to the dashboard or handle the sign-in logic
      navigate('/dashboard');
    } else {
      setSignInErrorMessage(<div style={{ color: "red" }}>Username and password are required</div>);
    }
  }

  const handleSignUp = () => {
    if (username && password && confirmPassword && phone && address && email) {
      if (password === confirmPassword) {
        
        const userData = {
          name: username,
          email: email,
          password: password,
          phone: phone,
          address: address,
        };

        axios
        .post('http://127.0.0.1:8000/api/signup_login/signup', userData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            if (response.status === 201) {
              // Registration was successful
              console.log('Registration was successful.');
              // You can perform actions based on success, such as redirecting to the dashboard
              navigate('/Dashboard');
            } else {
              // Handle other HTTP status codes as needed
              console.error('Registration failed with status code:', response.status);
            }
          })
          .catch(error => {
            // Handle any network or server errors
            console.error('Network/server error:', error);
          });
      } else {
        setSignUpErrorMessage(<div style={{ color: "red" }}>Passwords do not match</div>);
      }
    } else {
      setSignUpErrorMessage(<div style={{ color: "red" }}>All fields are required</div>);
    }
  }

  return (
    <div>
      <div className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className='bx bx-mail-send'></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {signUpErrorMessage && <div className="error-message">{signUpErrorMessage}</div>}
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input
                    type="Phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input
                    type="Address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <button onClick={handleSignUp}>
                  Sign Up
                </button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input
                    type="text"
                    placeholder="Username"
                    value={signInUsername}
                    onChange={(e) => setSignInUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    required
                  />
                </div>
                {signInErrorMessage && <div className="error-message">{signInErrorMessage}</div>}
                <button onClick={handleSignIn}>
                  Sign in
                </button>
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
        </div>
      </div>
    </div>
  );
}

export default SignupLogin;


