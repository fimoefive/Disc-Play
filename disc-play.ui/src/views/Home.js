import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody, Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';
import PlayerForm from '../forms/PlayerForm';

function Home({
  user,
  registeredUser,
}) {
  const isNotRegistered = () => (
    <>
      <h4>Register to Play</h4>
      <PlayerForm />
    </>
  );

  const authenticated = () => (
    <>
      <CardText>Ready To Play!</CardText>
      <Button color='danger' onClick={signOutUser}>Sign Out</Button>
    </>
  );

  const notAuthenticated = () => (
    <>
      <CardText>Sign in to start</CardText>
      <Button color='info' onClick={signInUser}>Sign In</Button>
    </>
  );

  return (
    <div>
      <Card className='home-card' style={{ borderWidth: '3px', borderColor: '#2F8F20' }}>
        <CardBody>
          <CardText>DISC GOLF APP</CardText>

        </CardBody>
      </Card>
      <Card className='home-form'>
        <CardBody>
          {user ? authenticated() : notAuthenticated()}
          {(user && registeredUser) && isNotRegistered()}
          {/* <PlayerForm /> */}
        </CardBody>
      </Card>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any,
  registeredUser: PropTypes.bool.isRequired,
  userDB: PropTypes.any
};

export default Home;
