import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import styled from 'styled-components';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <Spandiv>
            <span>Dashboard</span>
          </Spandiv>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <Spandiv>
            <span>Logout</span>
          </Spandiv>
          
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <NavbarCon>
      <H1>
        <Link to="/">
          <i className="fas fa-code" /> DevConnector
        </Link>
      </H1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </NavbarCon>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

const NavbarCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;
    >ul{
      display: flex;
    }
  >a{
    color: #fff;
  padding: 0.45rem;
  margin: 0 0.25rem;
  }
  >a:hover{
    color: var(--primary-color);
  }

`;
const H1 = styled.h1`
   margin-bottom: 1rem;
`;
const Spandiv = styled.div`
  display: none;
`; 