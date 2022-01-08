import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getMessages = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/message_forum`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getMessageByID = (messageID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/message_forum/${messageID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addMessage = (messageObj, userID) => new Promise((resolve, reject) => {
  messageObj.userId = userID;
  axios.post(`${dbUrl}/api/message_forum`, messageObj)
    .then(() => getMessages().then((messageArray) => resolve(messageArray)))
    .catch((error) => reject(error));
});

const deleteMessage = (messageID) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/api/message_forum/${messageID}`)
    .then(() => getMessages().then((messageArray) => resolve(messageArray)))
    .catch((error) => reject(error));
});

const updateMessage = (messageObj) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/api/message_forum/${messageObj.messageID}`, messageObj)
    .then(() => getMessages().then(resolve))
    .catch((error) => reject(error));
});

export {
  getMessages, getMessageByID,
  addMessage, deleteMessage,
  updateMessage
};