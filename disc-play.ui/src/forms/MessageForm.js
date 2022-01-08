import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addMessage, updateMessage } from '../helpers/data/MessageForumData';

function MessageForm({
  formTitle, user, messageID, userID, message, setMessages, timeStamp, uid
}) {
  const [newMessage, setNewMessage] = useState({
    messageID: messageID || 0,
    userID: userID || 0,
    message: message || '',
    timeStamp: timeStamp || new Date(),
    uid: uid || user.uid
  });

  const handleInputChange = (e) => {
    setNewMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.messageID) {
      updateMessage(newMessage).then(setMessages);
    } else {
      addMessage(newMessage).then((messageArray) => setMessages(messageArray));
      history.push('/messages');
    }
  };

  return (
    <div className="message-form">
      <form className='mt-3' id='add-message-forum' autoComplete='off' onSubmit={handleSubmit}>
        <label>{formTitle}</label>
        <input
          className='ml-2'
          name='message'
          type='text'
          placeholder='message'
          value={newMessage.message}
          onChange={handleInputChange} />
        <br />
        <Button color='primary' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

MessageForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  user: PropTypes.any,
  // userDB: PropTypes.any,
  messageID: PropTypes.any,
  userID: PropTypes.any,
  message: PropTypes.string,
  setMessages: PropTypes.func.isRequired,
  timeStamp: PropTypes.any,
  uid: PropTypes.string
};

export default MessageForm;