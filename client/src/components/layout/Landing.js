import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLanding = styled.div`
  position: relative;
  background: url('../../img/showcase.jpg') no-repeat center center/cover;
  height: 100vh;
`;

const StyledLandingInner = styled.div`
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

const StyledDarkOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <StyledLanding>
      <StyledDarkOverlay>
        <StyledLandingInner>
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </StyledLandingInner>
      </StyledDarkOverlay>
    </StyledLanding>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
