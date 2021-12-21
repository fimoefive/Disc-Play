import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody, CardSubtitle, Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';
import PlayerForm from '../forms/PlayerForm';

function Home({
    user,
    registeredUser,
  }) {
    const isNotRegistered = () => (
      <>
        <h4>You must register before continuing </h4>
        <PlayerForm />
      </>
    );
  
    const authenticated = () => (
      <>
      <CardText>Get started by browsing our items.</CardText>
      <Button color='danger' onClick={signOutUser}> Sign Out </Button>
      </>
    );
  
    const notAuthenticated = () => (
      <>
      <CardText>Sign in to start using the app</CardText>
      <Button color='info' onClick={signInUser}> Sign In </Button>
      </>
    );
  
    // const [currentImage, setCurrentImage] = useState(null);
  
    return (
      <div>
        <Card className='home-card' style={{ borderWidth: '3px', borderColor: '#2F8F20' }}>
          <CardBody>
            {/* <CardImg src={dadLogo} style={{ width: '50%', height: '50%' }}></CardImg> */}
            <CardSubtitle tag="h6" className="mb-2 text-muted">An e-commerce platform for the Dad in your life.</CardSubtitle>
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
    userFromDB: PropTypes.any
  };
  
  export default Home;