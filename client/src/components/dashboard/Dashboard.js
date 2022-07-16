import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import styled from 'styled-components';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Section >
      <H1>Dashboard</H1>
      <P>
        <i className="fas fa-user" /> Welcome {user && user.name}
      </P>
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <Deletediv>
            <Deletebtn onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </Deletebtn>
          </Deletediv>
        </>
      ) : (
        <>
          <Ptag>You have not yet setup a profile, please add some info</Ptag>
          <Profile>
            <Link to="/create-profile">
              Create Profile
            </Link>
          </Profile>
        </>
      )}
    </Section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);

const Section = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;
const H1 = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--primary-color);

`;
const P = styled.div`
   font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const Deletediv = styled.div`
  margin: 2rem 0;
`;
const Deletebtn = styled.div`
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
  background: var(--danger-color);
  color: #fff;
`;
const Profile = styled.div`
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
const Ptag = styled.div``;