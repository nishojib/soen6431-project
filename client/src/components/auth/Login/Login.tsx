import { FC } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { LoginView } from './LoginView';
import { useLogin } from './useLogin';

export const Login: FC = () => {
  const { isAuthenticated, handleSubmit, onSubmit, register } = useLogin();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <LoginView
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        link={Link}
      />
    );
  }
};
