import React from 'react'
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <div className="container-fluid">
     <Link className="navbar-brand text-white" to="/">{props.title}</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <Link className="nav-link active text-white" aria-current="page" to="/Dashboard">Dasboard</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link active text-white" to="/Property">Property</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link active text-white" to="/Agent">Agent</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link active text-white" to="/Support">Support</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link text-white" to="/SignupLogin">SignUp</Link>
         </li>
         
         </ul>
       <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
       </form>
     </div>
   </div>
 </nav>
  )
}
