import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';
import styled from 'styled-components';

const Profile = ({ getProfileById, profile: { profile }, auth }) => {
  const { id } = useParams();
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <Section>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Profiles>
            <Link to="/profiles">
              Back To Profiles
            </Link>
          </Profiles>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Editprofiles>
              <Link to="/edit-profile">
                Edit Profile
              </Link>
              </Editprofiles>
            )}
          <Profilegrid>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <Profileexp>
              <h2 >Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <H4>No experience credentials</H4>
              )}
            </Profileexp>

            <Profileedu>
              <h2 >Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <H4>No education credentials</H4>
              )}
            </Profileedu>

            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </Profilegrid>
        </Fragment>
      )}
    </Section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);

const Section = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;

const Profiles = styled.div`
  background: var(--light-color);
  color: #333;display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
`;
const Editprofiles = styled.div`
  background: var(--dark-color);
  color: #fff;
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
`;

const Profilegrid = styled.div`
  display: grid;
  grid-template-areas:
    'top top'
    'about about'
    'exp edu'
    'github github';
  grid-gap: 1rem;
  margin: 1rem 0;
`;
const Profileexp = styled.div`
  grid-area: exp;
  background: #fff;
  color: #333;
  border: #ccc solid 1px;
  padding: 2rem;
  >h2{
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

`;
const Profileedu = styled.div`
  grid-area: edu;
  background: #fff;
  color: #333;
  border: #ccc solid 1px;
  padding: 2rem;
  >h2{
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
`;

const H4 = styled.h4``;