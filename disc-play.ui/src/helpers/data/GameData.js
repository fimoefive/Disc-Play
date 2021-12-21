import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getGames = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/game`)
//   axios.get(`${dbUrl}/games.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getGameByID = (gameID) => new Promise((resolve, reject) => {
    axios.get(`${dbUrl}/api/game/${gameID}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
});
  
const addGame = (gameObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/game.`, gameObj)
    .then(() => getGames().then(resolve))
    .catch((error) => reject(error));
});

const deleteGame = (gameID) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/api/game/${gameID}`)
    .then(() => getGames().then((gameArray) => resolve(gameArray)))
    .catch((error) => reject(error));
});

const updateGame = (gameObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/api/game/${gameObj.gameID}`, gameObj)
    .then(() => getGames().then((gameArray) => resolve(gameArray)))
    .catch((error) => reject(error));
});

export {
    getGames, getGameByID,
    addGame,
  deleteGame, updateGame
};