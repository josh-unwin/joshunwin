import React from 'react';
import ProfileImage from './profileImage';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa'

const ProfileButtonStyled = styled.div`
  height: 30px;
  transition: 0.3s;

  &:hover {
    height: 50px;
  }
`

const ProfileButton = () => {
  return (
    <Link to="/">
      <ProfileButtonStyled className="py-1 text-body-gray font-nunito font-bold border-gray-600 border border-t-0 w-32 flex items-center justify-end flex-col rounded-b-lg">
        <FaUser />
        <span>Profile</span>
      </ProfileButtonStyled>
    </Link>
  )
}

export default ProfileButton