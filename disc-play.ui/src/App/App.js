import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { getValidUser, getUserWithUID, } from '../helpers/data/PlayerData';
// import { getUser, addPlayer } from '../helpers/data/PlayerData';
import { getGames } from '../helpers/data/GameData';
import { getMessages } from '../helpers/data/MessageForumData'
import '../styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(false);
  // const [loggedInUser, setLoggedUser] = useState({});
  const [games, setGames] = useState([]);
  const [messages, setMessages] = useState([]);

  // const checkUser = (newUser, authed) => {
  //   const checkStatus = Object.values(newUser);
  //   if (checkStatus.length >= 1) {
  //     const userArray = Object.values(newUser);
  //     setLoggedUser(userArray[0]);
  //   } else {
  //     const newUserInfoObj = {
  //       fullName: authed.displayName,
  //       profileImage: authed.photoURL,
  //       role: 'PLAYER',
  //       uid: authed.uid,
  //     };
  //     addPlayer(newUserInfoObj).then((userResponse) => setLoggedUser(userResponse));
  //   }
  // };

  // const getLoggedInUser = () => firebase.auth().currentUser?.uid;
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          email: authed.email,
          uid: authed.uid,
          // user: authed.email.split('@')[0]
        };
        getUserWithUID(authed.uid).then((resp) => setUserDB(resp));
        getValidUser(authed.uid).then((validResp) => setRegisteredUser(validResp));

        // CheckUser Function *****************
        // getUserWithUID(authed.uid).then((singleUser) => checkUser(singleUser, authed));
        // getUserWithUID(userInfoObj).then((response) => {
        //   // getUserUid(authed.uid).then((response) => {
        //   if (Object.values(response.data).length === 0) {
        //     addPlayer(userInfoObj).then((resp) => setUser(resp));
        //     // getLoggedInUser(userInfoObj);
        //     getUser(userInfoObj);
        //   }
        // });

        getGames().then((gamesArray) => setGames(gamesArray));
        getMessages().then((messageArray) => setMessages(messageArray));
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
        setRegisteredUser(false);
        setUserDB(false);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // user dependency error

  return (
    <div className="App">
  <Router>
        <NavBar
          user={user}
          registeredUser={registeredUser}
        />
        <Routes
          user={user}
          registeredUser={registeredUser}
          userDB={userDB}
          // loggedInUser={loggedInUser}
          games={games}
          setGames={setGames}
          messages={messages}
          setMessages={setMessages}
          setUserDB={setUser}
        />
      </Router>
    </div>
  );
}

export default App;
