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
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    const authenticated = () => (
        <>
  
            <NavItem>
                <Link className="nav-link" to="/items">Items</Link>
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
                        
            <NavItem>
              <Link className="nav-link" to="/"><Home /> Home</Link>
            </NavItem>
                        
            { (user && registeredUser) && authenticated() }
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
              {/* <NavItem>
                <Link className="nav-link" to="/profile"><ImUserTie /> Profile</Link>
              </NavItem> */}

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
