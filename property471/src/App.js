

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
import PropertyCreation from './Components/UserComponents/PropertyCreation';
import UserEditProfile from './Components/UserComponents/UserEditProfile';




function App() {

  const [userType,setUserType]=useState(localStorage.getItem("currentUserType") || "");
  const [userId,setUserId]=useState(localStorage.getItem("currentUserId") || "");
  const[userImagePath, setUserImagePath]=useState(localStorage.getItem(`currentUserImagePath`) || "");

  useEffect(() => {
    // const storageKey = `currentUserImagePath_${userId}`;
    console.log(`Storing image path for user :`, userImagePath);
    localStorage.setItem(`currentUserImagePath`, userImagePath);
  }, [ userImagePath]);
  
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
      <Route path="/UserDashboard" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  setUserType={setUserType} userId={userId}  setUserId={setUserId}/><UserDashboard userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />
      <Route path="/PropertyCreation" element={<div><Navbar  userImagePath={userImagePath} setUserImagePath={setUserImagePath}userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId}/><PropertyCreation userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType}/></div>} />
      <Route path="/UserEditProfile" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId}/><UserEditProfile userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />
      <Route path="/UserMarketplace" element={<div><Navbar  userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId}/><UserMarketplace userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />
      <Route path="/UserNotification" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId}/><UserNotification/></div>} />
      <Route path="/UserHireEmployee" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  setUserType={setUserType} userId={userId}  setUserId={setUserId}/><UserHireemployee userType={userType}  userId={userId}  setUserId={setUserId}/></div>} />
      
       {/* Agent components */}
      <Route path="/AgentDashboard" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} /><AgentDashboard userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType}/></div>} />
      <Route path="/AgentMarketplace" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} /><AgentMarketplace/></div>} />
      <Route path="/AgentNotification" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} /><AgentNotification/></div>} />
      <Route path="/Offers" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} /><Offers/></div>} />

      
      <Route path="/MarketPlace" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId}/><MarketPlace /></div>} />
      <Route path="/HireEmployee" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath}  userType={userType} setUserType={setUserType}  userId={userId}  setUserId={setUserId}/><HireEmployee/></div>} />
      <Route path="/" element={<div><Navbar  userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId}/><Home heading="Welcome" /></div>} />
      <Route path="/SignupLogin" element={<SignupLogin setUserType={setUserType} userId={userId}  setUserId={setUserId} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/>} />
          
   </Routes>
       </Router>
    </>
  );
}
export default App;