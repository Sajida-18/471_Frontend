import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EarningDetails = () => {
  const [earningData, setEarningData] = useState([]);
  

  useEffect(() => {
    axios.get(" http://127.0.0.1:8000/api/get_data/admin_earning_data ")
      .then((response) => {
        console.log(response.data.data);
        setEarningData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error.message);
      });
  }, []);

  
 

  return (
    <div>
      <h1 align="center">Earning Details</h1>

      <div>
        <table className="table">
          <thead>
            <tr align="center">
            <th scope="col">EARNING_ID</th>
              <th scope="col">PROPERTY_ID</th>
              <th scope="col">USER_ID</th>
              <th scope="col">EARNING_FROM</th>
              <th scope="col">EARNING_AMOUNT</th>
              
              
              
              
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(earningData) && earningData.length > 0 ? (
              earningData.map((earning) => (
                <tr align="center" key={earning.earning_id	}>
                <td>{earning.earning_id}</td>
                <td>{earning.property_id}</td>
                <td>{earning.user_id}</td>
                <td>{earning.earning_from}</td>
                <td>{earning.earning_amount}</td>
                
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No earning data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EarningDetails;
