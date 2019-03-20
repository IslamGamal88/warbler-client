import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeLine = ({ profileImageUrl, username }) => {
  return (
    <div className='row'>
      <div className='col-md-3 col-sm-12'>
        <UserAside profileImageUrl={profileImageUrl} username={username} />
      </div>
      <div className='col-md-9 col-sm-12'>
        <MessageList />
      </div>
    </div>
  );
};
export default MessageTimeLine;
