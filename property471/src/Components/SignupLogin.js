import React, {  useState } from "react";

import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import "./SignupLogin.css";
import "./modal.css"; // Import your CSS file
import axios from "axios";

const CustomModal = ({ isOpen, message, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    // Redirect to the login page
    navigate("/SignupLogin");
    // Close the modal
    onClose();
  };

  return (
    <div className={`custom-modal ${isOpen ? "open" : "closed"}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Sign Up Successful!</h2>
          <button onClick={handleClose}>Login</button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

function SignupLogin({ setUserType, userId,setUserId}) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInErrorMessage, setSignInErrorMessage] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
 
 
  const navigate = useNavigate();

  const toggle = () => {
    setIsSignIn(!isSignIn);
    clearFormFields();
  };

  const clearFormFields = () => {
    setSignInUsername("");
    setSignInPassword("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
    setAddress("");
    setSignInErrorMessage("");
    setSignUpErrorMessage("");
  };

  const handleSignIn = async () => {
    if (!signInUsername || !signInPassword) {
      setSignInErrorMessage(
        <div style={{ color: "red" }}>
          Both username and password are required
        </div>
      );
      return;
    }

    const signInData = {
      user_id: signInUsername,
      password: signInPassword,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/signup_login/login",
        signInData
      );

      if (response.status === 201) {
        console.log("Authentication successful.");

        // Set the userId state

        const { user_id } = response.data.data;
        setUserId(user_id);
        //console.log(userId);
        setUserType(response.data.data.type);

        // Navigate based on user type
        switch (response.data.data.type) {
          case "user":
            navigate("/UserDashboard");
            break;
          case "agent":
            navigate("/AgentDashboard");
            break;
          case "admin":
            navigate("/AdminDashboard");
            break;
          default:
            console.error("Unknown user type:", response.data.data.type);
            // Handle other user types or show an error message
            break;
        }
      } else {
        console.error(
          "Authentication failed with status code:",
          response.status
        );
        setSignInErrorMessage(
          <div style={{ color: "red" }}>Authentication failed</div>
        );
      }
    } catch (error) {
      console.error("Network/server error:", error);
      setSignInErrorMessage(
        <div style={{ color: "red" }}>Authentication failed</div>
      );
    }
  };

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
          .post("http://127.0.0.1:8000/api/signup_login/signup", userData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // setUserType(response.data["data"].type)

            if (response.status === 201) {
              // Registration was successful
              setUserId(response.data.data.user_id)
              setUserType(response.data.data.type);
              // Set the modal message
              setModalMessage(
                `Thank you for joining us! Use ${response.data.data.user_id} as your user id to log in to your account.`
              );
              // Open the modal
              setIsModalOpen(true);
              console.log("Registration was successful.");


            

            // Clear the form fields
            clearFormFields();
            } else {
              // Handle other HTTP status codes as needed
              console.error(
                "Registration failed with status code:",
                response.status
              );
            }
          })
          .catch((error) => {
            // Handle any network or server errors
            console.error("Network/server error:", error);
          });
      } else {
        setSignUpErrorMessage(
          <div style={{ color: "red" }}>Passwords do not match</div>
        );
      }
    } else {
      setSignUpErrorMessage(
        <div style={{ color: "red" }}>All fields are required</div>
      );
    }
  };

  return (
    <div className= "signupLogin">
      <div className={`container ${isSignIn ? "sign-in" : "sign-up"}`}>
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="Phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="Address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                {signUpErrorMessage && (
                  <div className="error-message">{signUpErrorMessage}</div>
                )}
                  <button onClick={handleSignUp}>Sign Up</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Login here
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    placeholder="User_id"
                    value={signInUsername}
                    onChange={(e) => setSignInUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    required
                  />
                </div>
                {signInErrorMessage && (
                  <div className="error-message">{signInErrorMessage}</div>
                )}
                <button onClick={handleSignIn}>Login</button>
                {/* <p>
                  <b>Forgot password?</b>
                </p> */}
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>
        <CustomModal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
      </div>
    </div>
  );
}

export default SignupLogin;









