import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectAuthLoading,
  selectIsAuthenticated
} from '../../redux/actions/auth';
import Spinner from '../layout/Spinner';

type PrivateRouteProps = {
  component: FC;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authLoading = useSelector(selectAuthLoading);

  if (authLoading) return <Spinner />;
  if (isAuthenticated) return <Component />;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
