import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ProfileType } from '../../model';
import {
  selectAuthLoading,
  selectAuthUser,
  selectIsAuthenticated
} from '../../redux/actions/auth';
import { getProfileById, selectProfile } from '../../redux/actions/profile';
import Spinner from '../layout/Spinner';
import ProfileAbout from './ProfileAbout';
import ProfileEducation from './ProfileEducation';
import ProfileExperience from './ProfileExperience';
import ProfileGithub from './ProfileGithub';
import ProfileTop from './ProfileTop';

const Profile: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authLoading = useSelector(selectAuthLoading);
  const authUser = useSelector(selectAuthUser);
  const profile: ProfileType = useSelector(selectProfile);

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);

  if (profile === null) {
    return (
      <section className="container">
        <Spinner />
      </section>
    );
  } else {
    const renderExperience =
      profile.experience.length > 0 ? (
        <Fragment>
          {profile.experience.map((experience) => (
            <ProfileExperience key={experience._id} experience={experience} />
          ))}
        </Fragment>
      ) : (
        <h4>No experience credentials</h4>
      );

    const renderEducation =
      profile.education.length > 0 ? (
        <Fragment>
          {profile.education.map((education) => (
            <ProfileEducation key={education._id} education={education} />
          ))}
        </Fragment>
      ) : (
        <h4>No education credentials</h4>
      );

    return (
      <Fragment>
        <Link to="/profiles" className="btn btn-light">
          Back To Profiles
        </Link>
        {isAuthenticated &&
          authLoading === false &&
          authUser._id === profile.user._id && (
            <Link to="/edit-profile" className="btn btn-dark">
              Edit Profile
            </Link>
          )}
        <div className="profile-grid my-1">
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Experience</h2>
            {renderExperience}
          </div>

          <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            {renderEducation}
          </div>

          {profile.githubusername && (
            <ProfileGithub username={profile.githubusername} />
          )}
        </div>
      </Fragment>
    );
  }
};

export default Profile;
