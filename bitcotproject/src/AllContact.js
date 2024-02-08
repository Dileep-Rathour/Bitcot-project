import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './Registration';
const AllContact = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <div className="plus-icon">
        All Contacts &nbsp;
        <span onClick={toggleForm} className="sa">+</span>
      </div>
      <div className='q'>
      <input type='search' placeholder='search-contact'></input>
      </div>
      {showForm && <RegistrationForm />}
    </div>
  );
};

export default AllContact;
