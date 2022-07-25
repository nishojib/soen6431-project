import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuthUser } from '../../redux/actions/auth';
import {
  deleteAccount,
  getCurrentProfile,
  selectProfile
} from '../../redux/actions/profile';
import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';

const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const profile = useSelector(selectProfile);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const handleDelete = () => dispatch(deleteAccount());

  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={handleDelete}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </section>
  );
};

export default Dashboard;
