import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfileCard from '../components/ProfileCard';

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: 10px;
  margin: 10px;
  z-index: -1;
  `;

function ProfileView({ user }) {
  return (
    <div>
      <h2>Player Profile</h2>
      <ProfileContainer>
      {
        <ProfileCard user={user} />
      }
      </ProfileContainer>
    </div>
  );
}

ProfileView.propTypes = {
  user: PropTypes.any
};

export default ProfileView;