import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user, registeredUser }) => {
  // console.log(user);
  // console.log(registeredUser);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/profile">Player</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/games">Games</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/message_forum">Message Forum</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar style={{
        backgroundColor: '#2F8F20', padding: '5px', border: '3px'
      }} dark expand="md">
        <NavbarBrand href="/">Disc-Play</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            {/* <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem> */}

            {(user && registeredUser) && authenticated()}
            {
              user !== null
              && <NavItem>
                {
                  user
                    ? <Button color='danger' onClick={signOutUser}> Sign Out </Button>
                    : <Button color='info' onClick={signInUser}> Sign In </Button>
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any,
  registeredUser: PropTypes.bool
};

export default NavBar;
