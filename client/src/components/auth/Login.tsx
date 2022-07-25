import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { LoginFormData } from '../../model';
import { login, selectIsAuthenticated } from '../../redux/actions/auth';

const Login: FC = () => {
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { email: '', password: '' }
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data.email, data.password));
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            {...register('email')}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            {...register('password', { minLength: 6 })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default Login;
