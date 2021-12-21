import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

function Player({ user }) {
  return (
    <div>
      <h2>Player Profile</h2>
      <ProfileContainer>
      {
        <PlayerCard user={user} />
      }
      </ProfileContainer>
    </div>
  );
}

Player.propTypes = {
  user: PropTypes.any
};

export default Player;
