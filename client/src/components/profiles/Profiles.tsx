import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileType } from '../../model';
import {
  getProfiles,
  selectProfileLoading,
  selectProfiles
} from '../../redux/actions/profile';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles: FC = () => {
  const dispatch = useDispatch();
  const profiles: ProfileType[] = useSelector(selectProfiles);
  const profileLoading = useSelector(selectProfileLoading);

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  if (profileLoading) {
    return <Spinner />;
  } else {
    const renderProfiles =
      profiles.length > 0 ? (
        profiles.map((profile) => (
          <ProfileItem key={profile._id} profile={profile} />
        ))
      ) : (
        <h4>No profiles found...</h4>
      );

    return (
      <Fragment>
        <h1 className="large text-primary">Developers</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop" /> Browse and connect with
          developers
        </p>
        <div className="profiles">{renderProfiles}</div>
      </Fragment>
    );
  }
};

export default Profiles;
