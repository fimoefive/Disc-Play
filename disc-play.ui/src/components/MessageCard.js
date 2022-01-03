import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import { getMessages, deleteMessage } from '../helpers/data/MessageForumData';
import MessageForm from '../forms/MessageForm';
// import { getUsers } from '../helpers/data/userData';
// import '../styles/messageForum.scss';

const MessageCard = ({
    user,
    messageID,
    userID,
    message,
    timeStamp,
    uid,
    setMessages,
    // userDB
}) => {
  const [editing, setEditing] = useState(false);
  // const [username, setUsername] = useState({});

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteMessage(messageID, user.uid) // userDB.userID
          .then(setMessages)
          .then(() => getMessages(user.uid))
          .then(setMessages);
        break;
      case 'edit':
        console.warn(user);
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  const timestamp = new Date().toISOString().slice(0, 10);
  // const timeValue = timestamp.valueOf();

  return (
    <>
      <div className="messageCard">
        <CardBody body="true" className="card text-center">
          <CardTitle tag="h5" type="text">{message}</CardTitle>
          <CardText type="number">Date: {timestamp}</CardText>
          <CardText type="text">Player: {user.firstName}</CardText>
          {user
            ? <Button color='info' user={user} onClick={() => handleClick('edit')}>
              {editing ? 'Close' : 'Edit Message'}
            </Button> : ''}
          {editing && <MessageForm
            formTitle='Edit Message'
            user={user}
            messageID={messageID}
            userID={userID}
            message={message}
            timeStamp={timeStamp}
            uid={uid}
            setMessages={setMessages}
          />
          }
          {user
            ? <Button color='danger' user={user} onClick={() => handleClick('delete')}>Delete</Button>
            : ''}

        </CardBody>
      </div>
    </>
  );
};

MessageCard.propTypes = {
  user: PropTypes.any,
  messageID: PropTypes.any.isRequired,
  userID: PropTypes.any,
  message: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
  uid: PropTypes.string,
  setMessages: PropTypes.func
};

export default MessageCard;
