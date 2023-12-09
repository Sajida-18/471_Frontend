import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [transactionData, setTransactionData] = useState([]);
  

  useEffect(() => {
    axios.get(" http://127.0.0.1:8000/api/get_data/all_transaction")
      .then((response) => {
        console.log(response.data.data);
        setTransactionData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error.message);
      });
  }, []);

  
 

  return (
    <div>
      <h1 align="center">Transaction History</h1>

      <div>
        <table className="table">
          <thead>
            <tr align="center">
              <th scope="col">TRANSACTION_ID</th>
              <th scope="col">AGENT_ID</th>
              <th scope="col">BUYER_ID</th>
              <th scope="col">PROPERTY_ID</th>
              <th scope="col">SELLER_ID</th>
              <th scope="col">BUYER_SENDS</th>
              <th scope="col">SELLER_RECEIVES</th>
              <th scope="col">AGENT_RECEIVES</th>
              <th scope="col">ADMIN_RECEIVES</th>
              
              
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(transactionData) && transactionData.length > 0 ? (
              transactionData.map((transaction) => (
                <tr align="center" key={transaction.transaction_id	}>
                  <td>{transaction.transaction_id}</td>
                  <td>{transaction.agent_id}</td>
                  <td>{transaction.buyer_id}</td>
                  <td>{transaction.property_id}</td>
                  <td>{transaction.seller_id}</td>
                  <td>{transaction.buyer_sends}</td>
                  <td>{transaction.seller_receives}</td>
                  <td>{transaction.agent_receives}</td>
                  <td>{transaction.admin_receives}</td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No Transaction data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
