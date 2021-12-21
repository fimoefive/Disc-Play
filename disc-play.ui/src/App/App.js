import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { getGames } from '../helpers/data/gameData';
import { getMessages } from '../helpers/data/MessageForumData'
import { getValidUser, getUserWithUID } from '../helpers/data/PlayerData';

import '../styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(false);
  const [games, setGames] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          email: authed.email,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        getUserWithUID(authed.uid).then((resp) => setUserDB(resp));
        getValidUser(authed.uid).then((validResp) => setRegisteredUser(validResp));
        getGames().then((gamesArray) => setGames(gamesArray));
        getMessages().then((messageArray) => setMessages(messageArray));
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
        setRegisteredUser(false);
        setUserDB(false);
      }
    });
  }, []);

  return (
    <div className="App">
  <Router>
        <NavBar
          user={user}
          registeredUser={registeredUser}
        />
        <Routes
          user={user}
          userDB={userDB}
          registeredUser={registeredUser}
          setUserDB={setUser}
          games={games}
          setGames={setGames}
          messages={messages}
          setMessages={setMessages}
        />
      </Router>
    </div>
  );
}

export default App;
