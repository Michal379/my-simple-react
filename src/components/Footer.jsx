import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary py-4">
      <div className="row">
        <div className="col">
          <h3>Our Offices</h3>
          <p>Located along Glams Archade, Upperlands Prisms road in Schimas Parla Province</p>
        </div>

        <div className="col">
          <h3>Contact Us</h3>
          <p>Telephone: +254741740811</p>
          <p>Telephone: +254751429950</p>
        </div>

        <div className="col">
          <p>Email: khakaimic4@gmail.com</p>
        </div>

        <div className="col">
          <p>Linkedin: <a href="https://www.linkedin.com/in/mical-khakayi-6555501b3/">Mical Khakayi</a></p>
          <p>Github: <a href="https://github.com/Michal379">Michal379</a></p>
        </div>
      </div>

      <p className="text-center mt-4">
        © 2023 Surreal Games. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;


// inline css styling
// import React from 'react';

// const Footer = () => {
//   return (
//     <div style={footerContainer}>
//       <div style={section}>
//         <h3 style={heading}>Our Offices</h3>
//         <p>Located along Glams Archade, Upperlands Prisms road in Schimas Parla Province</p>
//       </div>

//       <div style={section}>
//         <h3 style={heading}>Contact Us</h3>
//         <p>Telephone: +254741740811</p>
//         <p>Telephone: +254751429950</p>
//       </div>

//       <div style={section}>
//         <p>Email: khakaimic4@gmail.com</p>
//       </div>

//       <div style={section}>
//         <p>Linkedin: <a href="https://www.linkedin.com/in/mical-khakayi-6555501b3/">Mical Khakayi</a></p>
//         <p>Github: <a href="https://github.com/Michal379">Michal379</a></p>
//       </div>

//       <p style={copyright}>
//         © 2023 Surreal Games. All rights reserved.
//       </p>
//     </div>
//   );
// };

// const footerContainer = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: '#f1f1f1',
//   padding: '20px',
// };

// const section = {
//   marginBottom: '20px',
// };

// const heading = {
//   fontSize: '18px',
//   fontWeight: 'bold',
// };

// const link = {
//   color: '#0000ff',
//   textDecoration: 'none',
// };

// const copyright = {
//   fontSize: '14px',
//   color: '#888888',
//   marginTop: '20px',
// };

// export default Footer;