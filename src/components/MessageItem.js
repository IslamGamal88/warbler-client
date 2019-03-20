import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import styled from "styled-components";

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const MessageItem = ({
  date,
  profileImageUrl,
  text,
  username,
  userId,
  messageId,
  deleteMessage,
  correctUser
}) => {
  return (
    <li className='list-group-item my-2'>
      <Img className='m-3' src={profileImageUrl || DefaultProfileImg} alt={username} />
      <div>
        <Link to='/'>@{username} &nbsp;</Link>
        <span className='text-muted'>
          <Moment className='text-muted' format='Do MMM YY'>
            {date}
          </Moment>
        </span>
        <p>{text}</p>
        {correctUser && (
          <button className='btn btn-danger' onClick={() => deleteMessage(userId, messageId)}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
};
export default MessageItem;
