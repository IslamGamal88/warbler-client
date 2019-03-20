import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";
const UserAside = ({ profileImageUrl, username }) => (
  <div className='card'>
    <img
      src={profileImageUrl || DefaultProfileImg}
      className='card-img-top rounded img-thumbnail'
      alt={username}
      width='250'
      height='250'
    />
  </div>
);

export default UserAside;
