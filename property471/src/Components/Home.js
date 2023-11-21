


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Create a functional component for the Home page
const Home = () => {
  
  const bodyStyle = {
    margin: 0,
    padding: 0,
    height: '100vh',
    backgroundImage: 'url(https://www.marloproperty.com/wp-content/uploads/spca_visual_marbella__MG_4810-Edit.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
  };

  const heroStyle = {
    textAlign: 'center',
    padding: '150px 0',
  };
  return (
    <>
     <div style={bodyStyle}>
      {/* Hero Section */}
      <section style={heroStyle} className="hero">
        <div className="container">
          <h1>Welcome to Our Property Management Services</h1>
          <p>Discover the best properties for sale and buy off your own</p>
          <a href="/property" className="btn btn-outline-primary btn-lg">Explore Properties</a>
        </div>
      </section>

      {/* Featured Property Section */}
      <section className="featured-property">
        <div className="container">
          <h2 className="text-center mb-4"><b>Featured Property</b></h2>
          <div className="row">
            {/* Featured Property Cards */}
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.medvillaspain.co.uk/images/viviendas/2776/g_7dtqqckuur0x0x5g5t4u.jpg" className="card-img-top" alt="Property 1" />
                <div className="card-body">
                  <h5 className="card-title">Luxury Villa</h5>
                  <p className="card-text">Experience the height of luxury with this stunning villa.</p>
                  <a href="/MarketPlace" className="btn btn-outline-success">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Property 2" />
                <div className="card-body">
                  <h5 className="card-title">Modern Apartment</h5>
                  <p className="card-text">Live in style and comfort in this modern apartment.</p>
                  <a href="/MarketPlace" className="btn btn-outline-success">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Property 3" />
                <div className="card-body">
                  <h5 className="card-title">Cozy Cottage</h5>
                  <p className="card-text">Escape to this charming cottage and enjoy tranquility.</p>
                  <a href="/MarketPlace" className="btn btn-outline-success">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/04111335/amandari-indonesia-suite-exterior-and-pool_original_11588-2-1401x900.jpg" className="card-img-top" alt="Property 4" />
                <div className="card-body">
                  <h5 className="card-title">Resort</h5>
                  <p className="card-text">Resort Residences are Like a Home Away from Home.</p>
                  <a href="/MarketPlace" className="btn btn-outline-success">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_326,h_2638,w_4397,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-5g13txeqo-mark-taylor-companies-client/g5-cl-1ilppjz7kx-aviva/uploads/18-037-24_Fire_Pit_Area_efyaf4.jpg" className="card-img-top" alt="Property 5" />
                <div className="card-body">
                  <h5 className="card-title">Luxury Apartment</h5>
                  <p className="card-text">Live in style and comfort in this modern apartment.</p>
                  <a href="/MarketPlace" className="btn btn-outline-success">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.contemporist.com/wp-content/uploads/2019/10/modern-house-cottage-lakeside-architecture-141019-12107-01-800x533.jpg" className="card-img-top" alt="Property 6" />
                <div className="card-body">
                  <h5 className="card-title">Wood Cottage</h5>
                  <p className="card-text">Right where you want to be.</p>
                  <a href="/MarketPlace" className="btn btn-outline-success">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section>
        {/* Contributor Card 1 */}
        <div className="col-md-13">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-text">Contributors</h5>
              <p>Name: Zabir Ramiz</p>
              <p>ID: 21201394</p>
            </div>
          </div>
        </div>

        {/* Contributor Card 2 */}
        <div className="col-md-13">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-text">Contributors</h5>
              <p>Name: Nafisa Rahman</p>
              <p>ID: 21201446</p>
            </div>
          </div>
        </div>

        {/* Contributor Card 3 */}
        <div className="col-md-13">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-text">Contributors</h5>
              <p>Name: Sajida Hossain</p>
              <p>ID: 21201603</p>
            </div>
          </div>
        </div>

        {/* Contributor Card 4 */}
        <div className="col-md-13">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-text">Contributors</h5>
              <p>Name: Purba Tahia Hassan</p>
              <p>ID: 21201736</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;


// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = () => {
//   const bodyStyle = {
//     margin: 0,
//     padding: 0,
//   };

//   const carouselStyle = {
//     height: '50vh',
//   };

//   const heroStyle = {
//     textAlign: 'center',
//     padding: '150px 0',
//     color: 'black',
//   };

//   return (
//     <div style={bodyStyle}>
//       {/* Carousel Section */}
       
//       <Carousel style={carouselStyle}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://www.conradvillas.com/uploads/properties/133/phuket-luxury-tropical-villas-sale-3-4-bed-08366182.jpg"
//             alt="First slide"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://www.conradvillas.com/uploads/properties/104/ultra-luxury-villa-amarapura-for-sale-cape-yamu-77764233.jpg"
//             alt="Second slide"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-50"
//             src="https://via.placeholder.com/1600x800/5733FF/FFFFFF?text=Third+Slide"
//             alt="Third slide"
//           />
//         </Carousel.Item>
//       </Carousel>

//       {/* Hero Section */}
//       <section style={heroStyle} className="hero">
//         <div className="container">
//           <h1>Welcome to Our Property Management Services</h1>
//           <p>Discover the best properties for sale and buy off your own</p>
//           <a href="/property" className="btn btn-primary btn-lg">
//             Explore Properties
//           </a>
//         </div>
//       </section>

//       {/* Featured Property Section */}
//       <section className="featured-property">
//         <div className="container">
//           <h2 className="text-center mb-4">Featured Property</h2>
//           <div className="row">
//             {/* Featured Property Cards */}
//             <div className="col-md-4">
//               <div className="card">
//                 <img
//                   src="https://www.medvillaspain.co.uk/images/viviendas/2776/g_7dtqqckuur0x0x5g5t4u.jpg"
//                   className="card-img-top"
//                   alt="Property 1"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Luxury Villa</h5>
//                   <p className="card-text">
//                     Experience the height of luxury with this stunning villa.
//                   </p>
//                   <a href="/MarketPlace" className="btn btn-outline-success">
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card">
//                 <img
//                   src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   className="card-img-top"
//                   alt="Property 2"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Modern Apartment</h5>
//                   <p className="card-text">
//                     Live in style and comfort in this modern apartment.
//                   </p>
//                   <a href="/MarketPlace" className="btn btn-outline-success">
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card">
//                 <img
//                   src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   className="card-img-top"
//                   alt="Property 3"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Cozy Cottage</h5>
//                   <p className="card-text">
//                     Escape to this charming cottage and enjoy tranquility.
//                   </p>
//                   <a href="/MarketPlace" className="btn btn-outline-success">
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contributors Section */}
//       <section>
//         {/* Contributor Card 1 */}
//         <div className="col-md-13">
//           <div className="card mb-4 shadow-sm">
//             <div className="card-body">
//               <h5 className="card-text">Contributors</h5>
//               <p>Name: Zabir Ramiz</p>
//               <p>ID: 21201394</p>
//             </div>
//           </div>
//         </div>

//         {/* Contributor Card 2 */}
//         <div className="col-md-13">
//           <div className="card mb-4 shadow-sm">
//             <div className="card-body">
//               <h5 className="card-text">Contributors</h5>
//               <p>Name: Nafisa Rahman</p>
//               <p>ID: 21201446</p>
//             </div>
//           </div>
//         </div>

//         {/* Contributor Card 3 */}
//         <div className="col-md-13">
//           <div className="card mb-4 shadow-sm">
//             <div className="card-body">
//               <h5 className="card-text">Contributors</h5>
//               <p>Name: Sajida Hossain</p>
//               <p>ID: 21201603</p>
//             </div>
//           </div>
//         </div>

//         {/* Contributor Card 4 */}
//         <div className="col-md-13">
//           <div className="card mb-4 shadow-sm">
//             <div className="card-body">
//               <h5 className="card-text">Contributors</h5>
//               <p>Name: Purba Tahia Hassan</p>
//               <p>ID: 21201736</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



