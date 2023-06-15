import React, { useState } from 'react';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idPassport, setIdPassport] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleIdPassportChange = (e) => {
    setIdPassport(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <h2>Individual Details</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Identity:</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <label htmlFor="idPassport">Phone Number:</label>
          <input type="text" id="idPassport" value={idPassport} onChange={handleIdPassportChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
