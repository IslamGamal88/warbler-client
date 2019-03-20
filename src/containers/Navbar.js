import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import navbg from "../images/nav-bg.png";
import Logo from "../images/warbler-logo.png";
import { signOut } from "../store/actions";
class Navbar extends Component {
  signOut = e => {
    e.preventDefault();
    this.props.signOut();
  };

  render() {
    return (
      <Nav className='navbar navbar-expand-md'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            <WarblerLogo src={Logo} alt='warbler home' />
          </Link>
        </div>
        {!this.props.currentUser.isAuthenticated ? (
          <ul className='navbar-nav ml-auto'>
            <HoverLi className='nav-item'>
              <Link className='nav-link' to='/signup'>
                Sign Up
              </Link>
            </HoverLi>
            <HoverLi className='nav-item'>
              <Link className='nav-link' to='/signin'>
                Login
              </Link>
            </HoverLi>
          </ul>
        ) : (
          <ul className='navbar-nav ml-auto'>
            <HoverLi className='nav-item'>
              <Link onClick={this.signOut} className='nav-link' to='/signin'>
                Sign Out
              </Link>
            </HoverLi>
            <HoverLi className='nav-item'>
              <Link className='nav-link' to={`/users/${this.props.currentUser.user.id}/messages/new`}>
                New Message
              </Link>
            </HoverLi>
          </ul>
        )}
      </Nav>
    );
  }
}
const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};

export default connect(
  mapStateToProps,
  { signOut }
)(Navbar);

const Nav = styled.nav`
  background: url(${navbg});
  background-size: 100% 100%;
  a {
    font-weight: bold;
  }

  &.navbar-brand > img {
    display: inline-block;
    border-radius: 2px;
    width: 2px;
    margin-right: 5px;
  }
`;
const HoverLi = styled.li`
  margin: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
  a {
    &:hover {
      color: white;
    }
  }
`;

const WarblerLogo = styled.img`
  width: 30px;
  height: 30px;
`;
