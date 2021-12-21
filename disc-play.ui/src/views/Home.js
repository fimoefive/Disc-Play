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
        <h4>Register before continuing</h4>
        <PlayerForm />
      </>
    );
  
    const authenticated = () => (
      <>
      <CardText>Get started by browsing our items.</CardText>
      <Button color='danger' onClick={signOutUser}>Sign Out</Button>
      </>
    );
  
    const notAuthenticated = () => (
      <>
        <CardText>Sign in to play</CardText>
        <Button color='info' onClick={signInUser}>Sign In</Button>
      </>
    );
  
    return (
      <div>
        <Card className='home-card' style={{ borderWidth: '3px', borderColor: '#2F8F20' }}>
          <CardBody>
            <CardText>DISC GOLF PLAYER APP</CardText>
          </CardBody>
        </Card>
        <Card className='home-form'>
          <CardBody>
          { user ? authenticated() : notAuthenticated() }
            { (user && registeredUser) && isNotRegistered() }
          </CardBody>
        </Card>
        {/* <div className="home-page"><img src={[currentImage]}></img></div> */}
      </div>
    );
  }
  
  Home.propTypes = {
    user: PropTypes.any,
    registeredUser: PropTypes.bool.isRequired,
    userDB: PropTypes.any
  };
  
  export default Home;