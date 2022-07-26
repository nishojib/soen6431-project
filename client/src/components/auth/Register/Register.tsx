import { FC } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { RegisterView } from './RegisterView';
import { useRegister } from './useRegister';

export const Register: FC = () => {
  const { isAuthenticated, register, handleSubmit, onSubmit } = useRegister();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <RegisterView
        register={register}
        link={Link}
        onSubmit={handleSubmit(onSubmit)}
      />
    );
  }
};
