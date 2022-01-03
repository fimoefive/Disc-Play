import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addMessage, updateMessage } from '../helpers/data/MessageForumData';

function MessageForm({
    formTitle, user, messageID, userID, message, setMessages, timeStamp, uid
  }) {
    const [newMessage, setNewMessage] = useState({
      messageID: messageID || null,
      userID: userID || null,
      message: message || '',
      timeStamp: timeStamp || 'just now',
      uid: uid || null
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
        updateMessage(newMessage, user.uid).then(setMessages);
      } else {
        addMessage(newMessage, user.uid).then((messageArray) => setMessages(messageArray));
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
    messageID: PropTypes.string,
    userID: PropTypes.string,
    message: PropTypes.string,
    setMessages: PropTypes.func.isRequired,
    timeStamp: PropTypes.string,
    uid: PropTypes.string
  };
  
  export default MessageForm;