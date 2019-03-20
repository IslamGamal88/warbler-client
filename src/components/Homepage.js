import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/signed-out-home.jpg";
import MessageTimeline from "./MessageTimeline";
const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  text-align: center;
  padding: 1rem;
  background-position: center;
  background-size: cover;
  color: #fff;
  text-shadow: 0 0 8px #66757f;
`;

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <HomeContainer>
        <div className='d-flex flex-column'>
          <h1>What's Happening?</h1>
          <h4>New to Warbler?</h4>
          <Link to='/signup' className='btn btn-primary'>
            Sign Up here
          </Link>
        </div>
      </HomeContainer>
    );
  }
  return (
    <div className='container'>
      <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    </div>
  );
};
export default Homepage;
