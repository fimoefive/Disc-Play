import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getValidUser = (UID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/user/validateUser/${UID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserWithUID = (UID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/user/getUserByUserUID/${UID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addUserToDB = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/api/user`, object)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateUser = (userObject) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/user/${userObject.userID}`, userObject)
    .then(() => {
      getUserWithUID(userObject.userID).then((resolve));
    }).catch((error) => reject(error));
});

export {
  getValidUser, getUserWithUID, addUserToDB, updateUser
};