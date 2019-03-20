import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, deleteMessage } from "../store/actions";
import MessageItem from "../components/MessageItem";
class MessageList extends Component {
  componentDidMount = () => {
    this.props.fetchMessages();
  };

  deleteMessage = (uId, mId) => {
    this.props.deleteMessage(uId, mId);
  };

  renderList = () => {
    const { messages, currentUser } = this.props;
    return messages.map(message => {
      return (
        <MessageItem
          key={message._id}
          date={message.createdAt}
          text={message.text}
          username={message.user.username}
          profileImageUrl={message.user.profileImageUrl}
          deleteMessage={this.deleteMessage}
          userId={message.user._id}
          messageId={message._id}
          correctUser={currentUser === message.user._id}
        />
      );
    });
  };

  render() {
    return (
      <ul className='list-group' id='messages'>
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages, currentUser: state.currentUser.user.id };
};

export default connect(
  mapStateToProps,
  { fetchMessages, deleteMessage }
)(MessageList);
