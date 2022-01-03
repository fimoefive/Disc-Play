import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Player from '../views/Player';
import Games from '../views/Games';


const PrivateRoute = ({
    component: Component,
    user,
    registeredUser,
    ...rest
  }) => {
    const routeChecker = (attributes) => ((user && registeredUser)
      ? (<Component {...attributes} user={user} registeredUser={registeredUser} />)
      : (<Redirect to={{ pathname: '/', state: { from: attributes.location } }} />));
    return <Route {...rest} render={(props) => routeChecker(props)} />;
  };

PrivateRoute.propTypes = {
    component: PropTypes.func,
    user: PropTypes.any,
    registeredUser: PropTypes.bool
  };


function Routes({
    user,
    registeredUser,
    userDB,
    setUserDB,
    games,
    setGames
}) {
    return (
    <>
    <Switch>
    <Route exact path='/' component={() => <Home
          user={user}
          registeredUser={registeredUser}
          userDB={userDB}
        />} />
        <PrivateRoute
            user={user}
            registeredUser={registeredUser}
            path='/profile'
            component={() => <Player
            user={user}
            setUserDB={setUserDB}
            userDB={userDB}
            />}
        />
        <PrivateRoute
          user={user}
          registeredUser={registeredUser}
          userDB={userDB}
          path='/games'
          component={() => <Games
            user={user}
            games={games}
            setGames={setGames}
          />}
          />
        {/* <PrivateRoute
            user={user}
            registeredUser={registeredUser}
            path='/message_forum'
            component={() => <Player
            user={user}
            setUserDB={setUserDB}
            userDB={userDB}
            />}
        /> */}
    </Switch>
    </>
    );
}

Routes.propTypes = {
    user: PropTypes.any,
    registeredUser: PropTypes.bool.isRequired,
    userDB: PropTypes.any,
    setUserDB: PropTypes.any.isRequired,
    games: PropTypes.array.isRequired,
    setGames: PropTypes.func.isRequired
};

export default Routes;
