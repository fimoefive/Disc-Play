import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getGames = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/games`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getGameByID = (gameID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/games/${gameID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// TODO: Change GetGamesByUserID to getGamesByUserID
const getGamesByUserID = (userID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/games/GetGamesByUserID/${userID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addGame = (gameObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/games`, gameObj)
    .then(() => getGames().then(resolve))
    .catch((error) => reject(error));
});

const deleteGame = (gameID) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/api/games/${gameID}`)
    .then(() => getGames().then((gameArray) => resolve(gameArray)))
    .catch((error) => reject(error));
});

const updateGame = (gameObj, userID) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/api/games/${gameObj.gameID}`, gameObj)
    .then(() => getGamesByUserID(userID).then((gameArray) => {
      console.log(gameObj);
      resolve(gameArray)
    }))
    .catch((error) => reject(error));
});

const getSingleGame = (gameID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/games/${gameID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getGames, getGameByID,
  getGamesByUserID,
  getSingleGame, addGame,
  deleteGame, updateGame
};