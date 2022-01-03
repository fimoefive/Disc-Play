import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
    Button,
    CardBody,
    CardText,
    CardTitle,
} from 'reactstrap';
import { deleteGame } from '../helpers/data/GameData';
import GameForm from '../forms/GameForm';

const GameCard = ({
    user,
    userID,
    gameID,
    course,
    hole1,
    hole2,
    hole3,
    hole4,
    hole5,
    hole6,
    hole7,
    hole8,
    hole9,
    hole10,
    hole11,
    hole12,
    hole13,
    hole14,
    hole15,
    hole16,
    hole17,
    hole18,
    total,
    avg,
    TimeStamp,
    uid,
    setHoles
}) => {
    const [editing, setEditing] = useState(false);
    const history = useHistory();

const handleClick = (type) => {
    switch (type) {
        case 'delete':
            deleteGame(gameID, userID)
                .then(setHoles);
            break;
        case 'edit':
            setEditing((prevState) => !prevState);
            break;
        case 'view':
            history.push(`/games/${gameID}`);
            break;
        default:
            console.warn('nothing selected');
    }
};

    return (
    <>
    <div className="gameCard">
    <CardBody body="true" className="card text-center">
        <CardTitle tag="h5" type="text">Course: {course}</CardTitle>
        <CardText type="text">Hole 1</CardText>
        <div id='hole1' type='number'>{hole1}</div>
        <CardText type="text">Hole 2</CardText>
        <div id='hole2' type='number'>{hole2}</div>
        <CardText type="text">Hole 3</CardText>
        <div id='hole3' type='number'>{hole3}</div>
        <CardText type="text">Hole 4</CardText>
        <div id='hole4' type='number'>{hole4}</div>
        <CardText type="text">Hole 5</CardText>
        <div id='hole5' type='number'>{hole5}</div>
        <CardText type="text">Hole 6</CardText>
        <div id='hole6' type='number'>{hole6}</div>
        <CardText type="text">Hole 7</CardText>
        <div id='hole7' type='number'>{hole7}</div>
        <CardText type="text">Hole 8</CardText>
        <div id='hole8' type='number'>{hole8}</div>
        <CardText type="text">Hole 9</CardText>
        <div id='hole9' type='number'>{hole9}</div>
        <CardText type="text">Hole 10</CardText>
        <div id='hole1' type='number'>{hole10}</div>
        <CardText type="text">Hole 11</CardText>
        <div id='hole1' type='number'>{hole11}</div>
        <CardText type="text">Hole 12</CardText>
        <div id='hole1' type='number'>{hole12}</div>
        <CardText type="text">Hole 13</CardText>
        <div id='hole1' type='number'>{hole13}</div>
        <CardText type="text">Hole 14</CardText>
        <div id='hole1' type='number'>{hole14}</div>
        <CardText type="text">Hole 15</CardText>
        <div id='hole1' type='number'>{hole15}</div>
        <CardText type="text">Hole 16</CardText>
        <div id='hole1' type='number'>{hole16}</div>
        <CardText type="text">Hole 17</CardText>
        <div id='hole1' type='number'>{hole17}</div>
        <CardText type="text">Hole 18</CardText>
        <div id='hole1' type='number'>{hole18}</div>
        <div id='timestamp' type='number'>{TimeStamp}</div>
        <div id='total' type='number'>Total: {total}</div>
        <div id='avg' type='number'>Average: {avg}</div>
        <Button color="warning" onClick={() => handleClick('view')}>View Game</Button>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Game</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
            {editing ? 'CloseForm' : 'Edit Game'}
        </Button>
        {
        editing && <GameForm
            formTitle='Edit Game'
            userID={userID}
            user={user}
            gameID={gameID}
            course={course}
            hole1={hole1}
            hole2={hole2}
            hole3={hole3}
            hole4={hole4}
            hole5={hole5}
            hole6={hole6}
            hole7={hole7}
            hole8={hole8}
            hole9={hole9}
            hole10={hole10}
            hole11={hole11}
            hole12={hole12}
            hole13={hole13}
            hole14={hole14}
            hole15={hole15}
            hole16={hole16}
            hole17={hole17}
            hole18={hole18}
            total={total}
            TimeStamp={TimeStamp}
            avg={avg}
            uid={uid}
            setHoles={setHoles}
        />
        }
    </CardBody>
    </div>
    </>
    );
};

GameCard.propTypes = {
    user: PropTypes.any,
    userID: PropTypes.any.isRequired,
    gameID: PropTypes.any,
    course: PropTypes.string,
    hole1: PropTypes.number,
    hole2: PropTypes.number,
    hole3: PropTypes.number,
    hole4: PropTypes.number,
    hole5: PropTypes.number,
    hole6: PropTypes.number,
    hole7: PropTypes.number,
    hole8: PropTypes.number,
    hole9: PropTypes.number,
    hole10: PropTypes.number,
    hole11: PropTypes.number,
    hole12: PropTypes.number,
    hole13: PropTypes.number,
    hole14: PropTypes.number,
    hole15: PropTypes.number,
    hole16: PropTypes.number,
    hole17: PropTypes.number,
    hole18: PropTypes.number,
    total: PropTypes.number,
    avg: PropTypes.number,
    TimeStamp: PropTypes.any,
    uid: PropTypes.string,
    setHoles: PropTypes.func
};

export default GameCard;