import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getValidUser = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/user/validateUser/${uid}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserWithUID = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/user/GETUserByUID/${uid}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addPlayer = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/api/user`, object)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updatePlayer = (userObject) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/user/${userObject.userID}`, userObject)
    .then(() => {
      getUserWithUID(userObject.userID).then((resolve));
    }).catch((error) => reject(error));
});

export {
  getValidUser, getUserWithUID,
  addPlayer, updatePlayer
};