import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Landingsection>
      <Darkoverlay>
        <Innerlanding>
          <H1>Developer Connector</H1>
          <P> Create a developer profile/portfolio, share posts and get help from other developers</P>
          <Buttons>
            <Link to="/register" >
              <Sign>Sign Up</Sign>
            </Link>
            <Link to="/login">
              <Login>Login</Login> 
            </Link>
          </Buttons>
        </Innerlanding>
      </Darkoverlay>
    </Landingsection>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);

const Landingsection = styled.div`
  position: relative;
  background: url('./img/showcase.jpg') no-repeat center center/cover;
  height: 100vh;
`;
const Darkoverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Innerlanding = styled.div`
  color: #fff;
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const H1 = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;
const P = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const Buttons = styled.div`

`;
const Sign = styled.div`
display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  background: var(--primary-color);
  color: #fff;
`;
const Login = styled.div`
display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  color: #333;

`;