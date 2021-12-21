import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getMessages = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/message_forum`)
    // axios.get(`${dbUrl}/messages.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getMessageByID = (messageID) => new Promise((resolve, reject) => {
    axios.get(`${dbURL}/api/message_forum/${messageID}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

const addMessage = (messageObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/message_forum`, messageObj)
    .then((response) => {
      axios.patch(`${dbUrl}/messages/${response.data.name}.json`, body)
        .then(() => {
          getMessages(uid).then((messageArray) => resolve(messageArray));
        });
    }).catch((error) => reject(error));
});

const deleteMessage = (messageID) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/messages/${messageID}`)
    .then(() => getMessages().then((messageArray) => resolve(messageArray)))
    .catch((error) => reject(error));
});

const updateMessage = (messageObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/api/message_forum/${messageObj.messageID}.json`, messageObj)
    .then(() => getMessages().then(resolve))
    .catch((error) => reject(error));
});

export {
  getMessages, getMessageByID,
  addMessage, deleteMessage,
  updateMessage
};