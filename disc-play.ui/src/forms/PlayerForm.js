import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import { addUserToDB, updateUser } from '../helpers/data/usersData';

function PlayerForm({
  userID,
  firstName,
  lastName,
  email,
  uid,
  userRole,
  setUserFromDB
}) {
    const [newUser, setNewUser] = useState({
    userID: userID || null,
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    uid: uid || '',
    userRole: userRole || 'PLAYER'
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

//   const handleNumberInput = (e) => {
//     setNewUser((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.valueAsNumber
//     }));
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.userUID) {
      updateUser(newUser).then((userArray) => setUserFromDB(userArray));
      history.push('/profile');
    } else {
      addUserToDB(newUser);
    }
  };

  return (
    <div>
      <form className='mt-3' id='add-expense-form' autoComplete='off' onSubmit={handleSubmit}>
        <h4>Create Player Account</h4>
        <label>First Name:</label>
        <input
        className='ml-2'
        name='firstName'
        type='text'
        placeholder='First Name'
        value={newUser.firstName}
        onChange={handleInputChange}
        required />
        <br/>
        <label>Last Name:</label>
        <input
        className='ml-2'
        name='lastName'
        type='text'
        placeholder='Last Name'
        value={newUser.lastName}
        onChange={handleInputChange}
        required />
        <br/>
        <label>Email:</label>
        <input
        className='ml-2'
        name='email'
        type='text'
        placeholder='Email Address'
        value={newUser.email}
        onChange={handleInputChange}
        required
        />
        <br/>
        <label>Role:</label>
        <input
        className='ml-2'
        name='userRole'
        type='text'
        placeholder='Role'
        value={newUser.userRole}
        onChange={handleInputChange}
        required />
        <br/>
        <Button color='success' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

PlayerForm.propTypes = {
  userID: PropTypes.any,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  uid: PropTypes.any,
  userRole: PropTypes.any,
  setUserFromDB: PropTypes.any
};

export default PlayerForm;