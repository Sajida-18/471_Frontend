//import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Agent from './Components/Agent';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Property from './Components/Property';
import SignupLogin from './Components/SignupLogin';
import Support from './Components/Support';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  //Link
 } from "react-router-dom";
function App() {
  return (
    <>
    <Hello></Hello>
    <Router> 
    <Navbar title="Property471"/> 
    <div className="container my-3">
    <Routes>
      <Route path="/Support" element={<Support/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/SignupLogin" element={<SignupLogin/>}/>
      <Route path="/Agent" element={<Agent/>}/>
      <Route path="/Property" element={<Property/>}/>
      <Route path="/" element={<Home heading="Welcome"/>}>
      </Route>
   </Routes>
    </div>
   </Router>

    </>
  );
}

export default App;
