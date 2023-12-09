import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const [deletionMessage, setDeletionMessage] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/get_data/only_user_data")
      .then((response) => {
        console.log(response.data.data);
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error.message);
      });
  }, []);

  
  const handleRemoveUser= (userId) => {
    console.log(userId)
    axios.post('http://127.0.0.1:8000/api/remove/delete_user ', { user_id: userId })
    
      .then(response => {
        console.log(userId)
        console.log('user removed successfully:', response.data);
        setDeletionMessage(`${userId} has been successfully removed.`);
        setTimeout(() => {
          setDeletionMessage(null); // Clear the message after 5 seconds
        }, 5000);
        setUserData(userData.filter(user=> user.user_id !== userId));
      })
      .catch(error => {
        console.error('Error removing user:', error);
        setDeletionMessage(`Failed to remove user ${userId}. Please try again.`);
        setTimeout(() => {
          setDeletionMessage(null); // Clear the message after 5 seconds
        }, 5000); // 5000 milliseconds = 5 seconds
      
      });
  };

  return (
    <div>
      <h1 align="center">User Details</h1>

      {deletionMessage && (
        <div className="alert alert-success" role="alert">
          {deletionMessage}
        </div>
      )}

      <div>
        <table className="table">
          <thead>
            <tr align="center">
              <th scope="col">USER_ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ADDRESS</th>
              <th scope="col">PHONE</th>
              <th scope="col">WALLET</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(userData) && userData.length > 0 ? (
              userData.map((user) => (
                <tr align="center" key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>{user.wallet}</td>

                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleRemoveUser(user.user_id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No user data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
