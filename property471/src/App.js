

import Home from './Components/Home';
import MarketPlace from './Components/MarketPlace';
import Navbar from './Components/Navbar';
import PropertyDetails from './Components/PropertyDetails';

import SignupLogin from './Components/SignupLogin';

import { useState ,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
   } from "react-router-dom";
import UserDashboard from './Components/UserComponents/UserDashboard';
import UserMarketplace from './Components/UserComponents/UserMarketplace';
import UserHireemployee from './Components/UserComponents/UserHireEmployee';
import AgentDashboard from './Components/AgentComponent/AgentDashboard';
import AgentMarketplace from './Components/AgentComponent/AgentMarketplace';
import AdminDashboard from './Components/AdminComponents/AdminDashboard';
import Transaction from './Components/AdminComponents/Transaction';
import Hire from './Components/AdminComponents/Hire';
import EmployeeDetails from './Components/AdminComponents/EmployeeDetails';
import HireEmployee from './Components/HireEmployee';
import PropertyCreation from './Components/UserComponents/PropertyCreation';
import UserEditProfile from './Components/UserComponents/UserEditProfile';
import AgentEditProfile from './Components/AgentComponent/AgentEditProfile';
import AdminMarketPlace from './Components/AdminComponents/AdminMarketPlace';
import UserDetails from './Components/AdminComponents/UserDetails';
import EarningDetails from './Components/AdminComponents/EarningDetails';




function App() {

  const [userType,setUserType]=useState(localStorage.getItem("currentUserType") || "");
  const [userId,setUserId]=useState(localStorage.getItem("currentUserId") || "");
  const[userImagePath, setUserImagePath]=useState(localStorage.getItem(`currentUserImagePath`) || "");
  const [propertyId,setPropertyId]=useState(localStorage.getItem("currentPropertyId") || "");

  useEffect(() => {
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

  useEffect(() => {
    localStorage.setItem("currentPropertyId", propertyId);
  }, [propertyId]);

  return (
    <>
      <Router> 
      
      <Routes>
        {/* admin componests */}
      <Route path="/AdminDashboard" element={<div><Navbar propertyId={propertyId} setPropertyId={setPropertyId} userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  userId={userId}  setUserId={setUserId}/><AdminDashboard  propertyId={propertyId} setPropertyId={setPropertyId}userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />
      <Route path="/Transaction" element={<div><Navbar propertyId={propertyId} setPropertyId={setPropertyId} userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  userId={userId}  setUserId={setUserId}/><Transaction/></div>} />
      <Route path="/Hire" element={<div><Navbar propertyId={propertyId} setPropertyId={setPropertyId} userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  userId={userId}  setUserId={setUserId}/><Hire/></div>} />
      <Route path="/EmployeeDetails" element={<div><Navbar propertyId={propertyId} setPropertyId={setPropertyId} userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  userId={userId}  setUserId={setUserId}/><EmployeeDetails /></div>} />
      <Route path="/AdminMarketPlace" element={<div><Navbar propertyId={propertyId} setPropertyId={setPropertyId} userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  userId={userId}  setUserId={setUserId}/><AdminMarketPlace propertyId={propertyId} setPropertyId={setPropertyId} userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />
      <Route path="/UserDetails" element={<div><Navbar propertyId={propertyId} setPropertyId={setPropertyId} userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  userId={userId}  setUserId={setUserId}/><UserDetails userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />
      <Route path="/EarningDetails" element={<div><Navbar propertyId={propertyId} setPropertyId={setPropertyId} userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  userId={userId}  setUserId={setUserId}/><EarningDetails userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />


       {/* User componenst */}
      <Route path="/UserDashboard" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><UserDashboard userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />
      <Route path="/PropertyCreation" element={<div><Navbar  userImagePath={userImagePath} setUserImagePath={setUserImagePath}userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><PropertyCreation userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType}/></div>} />
      <Route path="/UserEditProfile" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><UserEditProfile userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} />
      <Route path="/UserMarketplace" element={<div><Navbar  userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><UserMarketplace userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath} propertyId={propertyId} setPropertyId={setPropertyId}/></div>} />
      <Route path="/UserHireEmployee" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType}  setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><UserHireemployee userType={userType}  userId={userId}  setUserId={setUserId}/></div>} />
      
       {/* Agent components */}
      <Route path="/AgentDashboard" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId} /><AgentDashboard userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType}/></div>} />
      <Route path="/AgentEditProfile" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId}/><AgentEditProfile userType={userType} userId={userId} setUserId={setUserId} setUserType={setUserType} userImagePath={userImagePath} setUserImagePath={setUserImagePath}/></div>} /> 
      <Route path="/AgentMarketplace" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId} /><AgentMarketplace/></div>} />


      
      <Route path="/MarketPlace" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><MarketPlace /></div>} />
      <Route path="/HireEmployee" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath}  userType={userType} setUserType={setUserType}  userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><HireEmployee/></div>} />
      <Route path="/PropertyDetails" element={<div><Navbar userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><PropertyDetails userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/></div>} />
      <Route path="/" element={<div><Navbar  userImagePath={userImagePath} setUserImagePath={setUserImagePath} userType={userType} setUserType={setUserType} userId={userId}  setUserId={setUserId} propertyId={propertyId} setPropertyId={setPropertyId}/><Home heading="Welcome" /></div>} />
      <Route path="/SignupLogin" element={<SignupLogin setUserType={setUserType} userId={userId}  setUserId={setUserId} userImagePath={userImagePath} setUserImagePath={setUserImagePath}propertyId={propertyId} setPropertyId={setPropertyId}/>} />
        
   </Routes>
       </Router>
    </>
  );
}
export default App;