import React from 'react'

export default function Hire() {
  return (
    <div>
      admin hire employee
    </div>
  )
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Hire = () => {
//   const [employeeType, setEmployeeType] = useState('');
//   const [employeeName, setEmployeeName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleRegister = () => {
//     // Implement your registration logic here
//     // This function will be called when the "Register" button is clicked
//   };

//   return (
//     <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
//       <div className="mask d-flex align-items-center h-100 gradient-custom-3">
//         <div className="container h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//               <div className="card" style={{ borderRadius: '15px' }}>
//                 <div className="card-body p-5">
//                   <h2 className="text-uppercase text-center mb-5">Create an account</h2>

//                   <form>
//                     <div className="form-outline mb-4">
//                       <input
//                         type="text"
//                         id="employeeType"
//                         className="form-control form-control-lg"
//                         placeholder="Employee Type"
//                         value={employeeType}
//                         onChange={(e) => setEmployeeType(e.target.value)}
//                         required
//                       />
//                       <label className="form-label" htmlFor="employeeType">Employee Type</label>
//                     </div>

//                     <div className="form-outline mb-4">
//                       <input
//                         type="text"
//                         id="employeeName"
//                         className="form-control form-control-lg"
//                         placeholder="Employee Name"
//                         value={employeeName}
//                         onChange={(e) => setEmployeeName(e.target.value)}
//                         required
//                       />
//                       <label className="form-label" htmlFor="employeeName">Employee Name</label>
//                     </div>

//                     <div className="form-outline mb-4">
//                       <input
//                         type="password"
//                         id="password"
//                         className="form-control form-control-lg"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                       />
//                       <label className="form-label" htmlFor="password">Password</label>
//                     </div>

//                     <div className="form-outline mb-4">
//                       <input
//                         type="email"
//                         id="email"
//                         className="form-control form-control-lg"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                       <label className="form-label" htmlFor="email">Email</label>
//                     </div>

//                     <div className="form-outline mb-4">
//                       <input
//                         type="text"
//                         id="address"
//                         className="form-control form-control-lg"
//                         placeholder="Address"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         required
//                       />
//                       <label className="form-label" htmlFor="address">Address</label>
//                     </div>

//                     <div className="form-outline mb-4">
//                       <input
//                         type="text"
//                         id="phone"
//                         className="form-control form-control-lg"
//                         placeholder="Phone"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         required
//                       />
//                       <label className="form-label" htmlFor="phone">Phone</label>
//                     </div>
//                     <Link to="/">
//                   <button onClick={handleRegister}>Register</button>
//                 </Link>
//                 </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hire;
