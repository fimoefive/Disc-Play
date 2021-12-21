import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addPlayer, updatePlayer } from '../helpers/data/PlayerData';

function PlayerForm({
  userID,
  firstName,
  lastName,
  email,
  uid,
  userRole,
  setUserDB
}) {
    const [newPlayer, setNewPlayer] = useState({
    userID: userID || null,
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    uid: uid || '',
    userRole: userRole || 'PLAYER'
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    setNewPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPlayer.uid) {
      updatePlayer(newPlayer).then((userArray) => setUserDB(userArray));
      history.push('/profile');
    } else {
      addPlayer(newPlayer);
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
        value={newPlayer.firstName}
        onChange={handleInputChange}
        required />
        <br/>
        <label>Last Name:</label>
        <input
        className='ml-2'
        name='lastName'
        type='text'
        placeholder='Last Name'
        value={newPlayer.lastName}
        onChange={handleInputChange}
        required />
        <br/>
        <label>Email:</label>
        <input
        className='ml-2'
        name='email'
        type='text'
        placeholder='Email Address'
        value={newPlayer.email}
        onChange={handleInputChange}
        required
        />
        {/* <br/>
        <label>Role:</label>
        <input
        className='ml-2'
        name='userRole'
        type='text'
        placeholder='Role'
        value={newPlayer.userRole}
        onChange={handleInputChange}
        required /> */}
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
  setUserDB: PropTypes.any
};

export default PlayerForm;