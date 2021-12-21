import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import { getGames } from '../helpers/data/GameData';
import GameCard from '../components/GameCard';
import GameForm from '../forms/GameForm';

function Games({
  user,
  games,
  setGames
}) {
  const [showAddGame, setAddGame] = useState(false);
  // const [holes, setHoles] = useState([]);

  const handleClick = () => {
    setAddGame((prevState) => !prevState);
  };

function total(gameInfo) {
    let hole = 0;
    hole += Number(gameInfo.hole1);
    hole += Number(gameInfo.hole2);
    hole += Number(gameInfo.hole3);
    hole += Number(gameInfo.hole4);
    hole += Number(gameInfo.hole5);
    hole += Number(gameInfo.hole6);
    hole += Number(gameInfo.hole7);
    hole += Number(gameInfo.hole8);
    hole += Number(gameInfo.hole9);
    hole += Number(gameInfo.hole10);
    hole += Number(gameInfo.hole11);
    hole += Number(gameInfo.hole12);
    hole += Number(gameInfo.hole13);
    hole += Number(gameInfo.hole14);
    hole += Number(gameInfo.hole15);
    hole += Number(gameInfo.hole16);
    hole += Number(gameInfo.hole17);
    hole += Number(gameInfo.hole18);

    return hole;
}

function avg(holeInfo) {
    let hole = 0;
    hole += Number(holeInfo.hole1);
    hole += Number(holeInfo.hole2);
    hole += Number(holeInfo.hole3);
    hole += Number(holeInfo.hole4);
    hole += Number(holeInfo.hole5);
    hole += Number(holeInfo.hole6);
    hole += Number(holeInfo.hole7);
    hole += Number(holeInfo.hole8);
    hole += Number(holeInfo.hole9);
    hole += Number(holeInfo.hole10);
    hole += Number(holeInfo.hole11);
    hole += Number(holeInfo.hole12);
    hole += Number(holeInfo.hole13);
    hole += Number(holeInfo.hole14);
    hole += Number(holeInfo.hole15);
    hole += Number(holeInfo.hole16);
    hole += Number(holeInfo.hole17);
    hole += Number(holeInfo.hole18);
    hole /= 18;
    return hole.toFixed(2);
}

  return (
    <>
      <div className="game-container">
        <div>
          {!showAddGame
            ? <Button className="addGameBtn" color="primary" user={user} onClick={handleClick}>ADD Game</Button>
            : <div>
              <Button className="closeForm" color="secondary" onClick={handleClick}>CLOSE</Button>
              <GameForm
                setGames={setGames}
                user={user}
              />
            </div>
          }
        </div>
        {games.map((holeInfo) => (
          <GameCard className="gameCard"
            key={holeInfo.gameID}
            gameID={holeInfo.gameID}
            course={holeInfo.course}
            hole1={holeInfo.hole1}
            hole2={holeInfo.hole2}
            hole3={holeInfo.hole3}
            hole4={holeInfo.hole4}
            hole5={holeInfo.hole5}
            hole6={holeInfo.hole6}
            hole7={holeInfo.hole7}
            hole8={holeInfo.hole8}
            hole9={holeInfo.hole9}
            total={total(holeInfo)}
            avg={avg(holeInfo)}
            // TimeStamp={TimeStamp}
            user={user}
            setGames={setGames}
          />
        ))}
      </div>
    </>
  );
}

Games.propTypes = {
  user: PropTypes.any,
  games: PropTypes.array,
  setGames: PropTypes.func
};

export default Games;