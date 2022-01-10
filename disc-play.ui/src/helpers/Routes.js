import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Player from '../views/Player';
import Games from '../views/Games';
import SingleGame from '../views/SingleGame'
import MessageForum from '../views/MessageForum';

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
  games,
  setGames,
  messages,
  setMessages,
  registeredUser,
  userDB,
  setUserDB
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
          path='/games/:gameID'
          component={() => <SingleGame
            user={user}
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
            userDB={userDB}
          />}
        />
        <PrivateRoute
          user={user}
          registeredUser={registeredUser}
          userDB={userDB}
          path='/message_forum'
          component={() => <MessageForum
            user={user}
            messages={messages}
            setMessages={setMessages}
            userDB={userDB}
          />}
        />
        {/* <PrivateRoute
          user={user}
          registeredUser={registeredUser}
          path='/course_finder'
          component={() => <CourseFinder
            user={user}
            userDB={userDB}
          />}
        /> */}
      </Switch>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  games: PropTypes.array.isRequired,
  setGames: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  registeredUser: PropTypes.bool.isRequired,
  userDB: PropTypes.any,
  setUserDB: PropTypes.any.isRequired
};

export default Routes;
