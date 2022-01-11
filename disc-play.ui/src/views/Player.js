import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getGames } from '../helpers/data/GameData';
import PlayerCard from '../components/PlayerCard';

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: 10px;
  margin: 10px;
  z-index: -1;
  `;

function Player({ user, userDB, setUserDB }) {
  const [playerAverage, setPlayerAverage] = useState(0);

  useEffect(() => {
    getGames(user.uid).then((holesArray) => {
      let average = 0;
      holesArray.forEach((holes) => {
        average += Number(holes.hole1);
        average += Number(holes.hole2);
        average += Number(holes.hole3);
        average += Number(holes.hole4);
        average += Number(holes.hole5);
        average += Number(holes.hole6);
        average += Number(holes.hole7);
        average += Number(holes.hole8);
        average += Number(holes.hole9);
        average += Number(holes.hole10);
        average += Number(holes.hole11);
        average += Number(holes.hole12);
        average += Number(holes.hole13);
        average += Number(holes.hole14);
        average += Number(holes.hole15);
        average += Number(holes.hole16);
        average += Number(holes.hole17);
        average += Number(holes.hole18);
      });
      setPlayerAverage(average / holesArray.length);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Player Profile</h2>
      {/* toFixed() reads as a string parsed error */}
      <h2>Player Average: {playerAverage.toFixed(2)}</h2>
      <ProfileContainer>
        {
          <PlayerCard user={user} userDB={userDB} setUserDB={setUserDB} />
        }
      </ProfileContainer>
    </div>
  );
}

Player.propTypes = {
  user: PropTypes.any,
  userDB: PropTypes.any,
  setUserDB: PropTypes.any
};

export default Player;
