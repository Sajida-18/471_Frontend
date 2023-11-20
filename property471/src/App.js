
// import React from 'react';
// import './App.css';
// // import Hello from './Components/Hello';
// import axios from 'axios';
// import Navbar from './Components/Navbar';


// class App  extends React.Component {

//   state = {details: [],}

//   componentDidMount() {
//     let data;
//     axios.get('http://127.0.0.1:8000/hello_world_function/first_function_url')

//       .then(res => {
//         data = res.data;
//         this.setState({
//           details: data

//         });
//       })
//       .catch(err => { })
//   }

//   render() {
    
//     return(
//       <>
//       <div>
//         {/* <Hello /> */}
//         <Navbar/>
//         <header>the data that i got</header>
//         <hr />
//         {this.state.details.map((out) => (
//           <div>
//             {out.hello} <br />
//             {out.world} <br />
            
//             <br /><br />
//           </div>
//         ))}
//       </div>
      
//       </>
//     )
//   }

// }

// export default App;

// import  { useState, useEffect } from 'react';

// function App() {
//   const [details, setDetails] = useState([]);


//   useEffect(() => {
//     let data;
//     axios.get('http://127.0.0.1:8000/hello_world_function/first_function_url')
//       .then((res) => {
//         data = res.data;
//         setDetails(data);
//       })
//       .catch((err) => {});
//   }, []); // Empty dependency array to mimic componentDidMount behavior

//   return (
//     <>
//       <div>
//         <Hello />
//         <header>the data that I got</header>
//         <hr />
//         {details.map((out, index) => (
//           <div key={index}>
//             {out.hello} <br />
//             {out.world} <br />
//             <br /><br />
//           </div>
//         ))}
//       </div>
//       </>
//   );
// }

// export default App;





import Home from './Components/Home';
import MarketPlace from './Components/MarketPlace';
import Navbar from './Components/Navbar';

import SignupLogin from './Components/SignupLogin';

import { useState ,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
   } from "react-router-dom";
import UserDashboard from './Components/UserComponents/UserDashboard';
import UserMarketplace from './Components/UserComponents/UserMarketplace';
import UserNotification from './Components/UserComponents/UserNotification';
import UserHireemployee from './Components/UserComponents/UserHireEmployee';
import AgentDashboard from './Components/AgentComponent/AgentDashboard';
import AgentMarketplace from './Components/AgentComponent/AgentMarketplace';
import AgentNotification from './Components/AgentComponent/AgentNotification';
import Offers from './Components/AgentComponent/Offers';
import AdminDashboard from './Components/AdminComponents/AdminDashboard';
import Transaction from './Components/AdminComponents/Transaction';
import Hire from './Components/AdminComponents/Hire';
import EmployeeDetails from './Components/AdminComponents/EmployeeDetails';
import HireEmployee from './Components/HireEmployee';




function App() {

  const [userType,setUserType]=useState(localStorage.getItem("currentUserType") || "");
  const [userId,setUserId]=useState(localStorage.getItem("currentUserId") || "");
  useEffect(() => {
    console.log(`UseEffect theke ${userId}`);
  }, [userId]);

  useEffect(() => {
    localStorage.setItem("currentUserType", userType);
  }, [userType]);
  
  useEffect(() => {
    localStorage.setItem("currentUserId", userId);
  }, [userId]);
  return (
    <>
      <Router> 
      
      <Routes>
        {/* admin componests */}
      <Route path="/AdminDashboard" element={<div><Navbar userType={userType}  userId={userId}  setUserId={setUserId}/><AdminDashboard/></div>} />
      <Route path="/Transaction" element={<div><Navbar userType={userType}  userId={userId}  setUserId={setUserId}/><Transaction/></div>} />
      <Route path="/Hire" element={<div><Navbar userType={userType}  userId={userId}  setUserId={setUserId}/><Hire/></div>} />
      <Route path="/EmployeeDetails" element={<div><Navbar userType={userType}  userId={userId}  setUserId={setUserId}/><EmployeeDetails /></div>} />

       {/* User componenst */}
      <Route path="/UserDashboard" element={<div><Navbar userType={userType} userId={userId}  setUserId={setUserId}/><UserDashboard userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType}/></div>} />
      <Route path="/UserMarketplace" element={<div><Navbar userType={userType}  userId={userId}  setUserId={setUserId}/><UserMarketplace/></div>} />
      <Route path="/UserNotification" element={<div><Navbar userType={userType}  userId={userId}  setUserId={setUserId}/><UserNotification/></div>} />
      <Route path="/UserHireEmployee" element={<div><Navbar userType={userType}  userId={userId}  setUserId={setUserId}/><UserHireemployee/></div>} />
      
       {/* Agent components */}
      <Route path="/AgentDashboard" element={<div><Navbar userType={userType} userId={userId}  setUserId={setUserId} /><AgentDashboard/></div>} />
      <Route path="/AgentMarketplace" element={<div><Navbar userType={userType} userId={userId}  setUserId={setUserId} /><AgentMarketplace/></div>} />
      <Route path="/AgentNotification" element={<div><Navbar userType={userType} userId={userId}  setUserId={setUserId} /><AgentNotification/></div>} />
      <Route path="/Offers" element={<div><Navbar userType={userType} userId={userId}  setUserId={setUserId} /><Offers/></div>} />

      
      <Route path="/MarketPlace" element={<div><Navbar userType={userType} userId={userId}  setUserId={setUserId}/><MarketPlace /></div>} />
      <Route path="/HireEmployee" element={<div><Navbar userType={userType}  userId={userId}  setUserId={setUserId}/><HireEmployee/></div>} />
      <Route path="/" element={<div><Navbar userType={userType} userId={userId}  setUserId={setUserId}/><Home heading="Welcome" /></div>} />
      <Route path="/SignupLogin" element={<SignupLogin setUserType={setUserType} userId={userId}  setUserId={setUserId}/>} />
          
   </Routes>
       </Router>
    </>
  );
}
export default App;

