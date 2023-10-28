
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


import Dashboard from './Components/Dashboard';
import HireEmployee from './Components/HireEmployee';
import Home from './Components/Home';
import MarketPlace from './Components/MarketPlace';
import Navbar from './Components/Navbar';
import Notification from './Components/Notification';
import SignupLogin from './Components/SignupLogin';
import {
  BrowserRouter as Router,
  Route,
  Routes,
   } from "react-router-dom";


function App() {

  const userType = " "
  
  return (
    <>
      <Router> 
      <Routes>
      <Route path="/Dashboard" element={<div><Navbar userType={userType} /><Dashboard /></div>} />
      <Route path="/HireEmployee" element={<div><Navbar userType={userType}/><HireEmployee /></div>} />
      <Route path="/MarketPlace" element={<div><Navbar userType={userType} /><MarketPlace /></div>} />
      <Route path="/Notification" element={<div><Navbar userType={userType} /><Notification/></div>} />
      <Route path="/" element={<div><Navbar userType={userType}/><Home heading="Welcome" /></div>} />
      <Route path="/SignupLogin" element={<SignupLogin />} />
          
   </Routes>
       </Router>
    </>
  );
}

export default App;

