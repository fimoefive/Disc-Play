import React, { useState } from 'react';
import {
  Card, CardText, CardBody, CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import PlayerForm from '../forms/PlayerForm';
// import '../styles/player.scss';

function PlayerCard({
  user,
  userDB,
  setUserDB
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('default');
        break;
    }
  };

  return (
    <div>
      <Card className='player-card'>
        <CardBody>
          <CardTitle tag="h3">Player Name: {userDB.firstName} {userDB.lastName}</CardTitle>
          <CardText>Email: {userDB.email}</CardText>
          <CardText>Role: {userDB.userRole}</CardText>
          <Button
            className="m-2"
            color="info"
            onClick={() => handleClick('edit')}
            size="sm">
            {editing ? 'Close Form' : 'Edit Player'}
          </Button>
          {editing && <PlayerForm
            user={user}
            userID={userDB.userID}
            firstName={userDB.firstName}
            lastName={userDB.lastName}
            email={userDB.email}
            uid={userDB.uid}
            userRole={userDB.userRole}
            setUserDB={setUserDB} />}
        </CardBody>
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  user: PropTypes.any,
  userDB: PropTypes.any.isRequired,
  setUserDB: PropTypes.any
};

export default PlayerCard;
