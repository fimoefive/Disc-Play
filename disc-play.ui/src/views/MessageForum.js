import React from 'react';
import PropTypes from 'prop-types';
import MessageCard from '../components/MessageCard';
import MessageForm from '../forms/MessageForm';

function MessageForum({
  user, messages, setMessages,
}) {
  return (
    <div className="message-container">
      <br />
      <MessageForm
        formTitle={'New Message'}
        user={user}
        setMessages={setMessages}
      />
      {
        messages.map((message) => (
          <MessageCard className="messageCard"
            key={message.messageID}
            user={user}
            messageID={message.messageID}
            userID={message.userID}
            message={message.message}
            timeStamp={message.timeStamp}
            uid={message.uid}
            setMessages={setMessages}
          />
        ))
      }
    </div>
  );
}

MessageForum.propTypes = {
  user: PropTypes.any,
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
};

export default MessageForum;