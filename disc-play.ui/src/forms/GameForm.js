import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button, Form,
    FormGroup, Label, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom'
import { addGame, updateGame } from '../helpers/data/GameData';

const GameForm = ({
    user,
    userDB,
    gameID,
    userID,
    formTitle,
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
    timeStamp,
    uid,
    setGames,
}) => {
    const [game, setGame] = useState({
        gameID: gameID || 0,
        userID: userID || 0,
        course: course || '',
        hole1: hole1 || 0,
        hole2: hole2 || 0,
        hole3: hole3 || 0,
        hole4: hole4 || 0,
        hole5: hole5 || 0,
        hole6: hole6 || 0,
        hole7: hole7 || 0,
        hole8: hole8 || 0,
        hole9: hole9 || 0,
        hole10: hole10 || 0,
        hole11: hole11 || 0,
        hole12: hole12 || 0,
        hole13: hole13 || 0,
        hole14: hole14 || 0,
        hole15: hole15 || 0,
        hole16: hole16 || 0,
        hole17: hole17 || 0,
        hole18: hole18 || 0,
        timeStamp: timeStamp || new Date(),
        uid: uid || user.uid
    });

    const handleInputChange = (e) => {
        setGame((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleNumberInput = (e) => {
        setGame((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.valueAsNumber
        }));
    };

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // debugger;
        if (game.gameID) {
            updateGame(game, userDB.userID).then((gameArray) => {
                // con[sole.log("updateGame", gameArray);
                setGames(gameArray)
            });
        } else {
            addGame(game, userDB.userID).then((response) => {
                setGames(response);
                history.push('/games');
            });

            // Clears Input Fields
            setGame({
                // gameID: null,
                course: '',
                hole1: 0,
                hole2: 0,
                hole3: 0,
                hole4: 0,
                hole5: 0,
                hole6: 0,
                hole7: 0,
                hole8: 0,
                hole9: 0,
                hole10: 0,
                hole11: 0,
                hole12: 0,
                hole13: 0,
                hole14: 0,
                hole15: 0,
                hole16: 0,
                hole17: 0,
                hole18: 0,
                timeStamp
            });
        }
    };

    return (
        <>
            <div className='game-form'>
                <Form
                    id='addGameForm'
                    autoComplete='off'
                    onSubmit={handleSubmit}
                >
                    <h2>{formTitle}</h2>
                    <FormGroup>
                        <Label htmlFor="course">Course: </Label>
                        <Input
                            name='course'
                            id='course'
                            value={game.course}
                            type='text'
                            placeholder='Enter Course'
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 1:</Label>
                        <Input
                            name='hole1'
                            id='hole1'
                            value={game.hole1}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 2:</Label>
                        <Input
                            name='hole2'
                            id='hole2'
                            value={game.hole2}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 3:</Label>
                        <Input
                            name='hole3'
                            id='hole3'
                            value={game.hole3}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 4:</Label>
                        <Input
                            name='hole4'
                            id='hole4'
                            value={game.hole4}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 5:</Label>
                        <Input
                            name='hole5'
                            id='hole5'
                            value={game.hole5}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 6:</Label>
                        <Input
                            name='hole6'
                            id='hole6'
                            value={game.hole6}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 7:</Label>
                        <Input
                            name='hole7'
                            id='hole7'
                            value={game.hole7}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 8:</Label>
                        <Input
                            name='hole8'
                            id='hole8'
                            value={game.hole8}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 9: </Label>
                        <Input
                            name='hole9'
                            id='hole9'
                            value={game.hole9}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 10:</Label>
                        <Input
                            name='hole10'
                            id='hole11'
                            value={game.hole10}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 11:</Label>
                        <Input
                            name='hole11'
                            id='hole11'
                            value={game.hole11}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 12:</Label>
                        <Input
                            name='hole12'
                            id='hole12'
                            value={game.hole12}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 13:</Label>
                        <Input
                            name='hole13'
                            id='hole13'
                            value={game.hole13}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 14:</Label>
                        <Input
                            name='hole14'
                            id='hole14'
                            value={game.hole14}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 15:</Label>
                        <Input
                            name='hole15'
                            id='hole15'
                            value={game.hole1}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 16:</Label>
                        <Input
                            name='hole16'
                            id='hole16'
                            value={game.hole16}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 17:</Label>
                        <Input
                            name='hole17'
                            id='hole17'
                            value={game.hole17}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hole">Hole 18:</Label>
                        <Input
                            name='hole18'
                            id='hole18'
                            value={game.hole18}
                            type='number'
                            placeholder='0'
                            onChange={handleNumberInput}
                        />
                    </FormGroup>
                    <div>
                        <Button className="holeSubmit" color="success" type='submit'>Submit</Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

GameForm.propTypes = {
    formTitle: PropTypes.string,
    user: PropTypes.any,
    userDB: PropTypes.any,
    userID: PropTypes.any,
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
    timeStamp: PropTypes.any,
    setTotal: PropTypes.func,
    uid: PropTypes.string,
    setGames: PropTypes.func
};

export default GameForm;