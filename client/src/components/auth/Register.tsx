import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { RegisterFormData } from '../../model';
import { setAlert } from '../../redux/actions/alert';
import {
  register as signup,
  selectIsAuthenticated
} from '../../redux/actions/auth';

const Register: FC = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onSubmit = async (data: RegisterFormData) => {
    const { password, password2, name, email } = data;

    if (password !== password2) {
      dispatch(setAlert('Passwords do not match', 'danger'));
    } else {
      dispatch(signup({ name, email, password }));
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input type="text" placeholder="Name" {...register('name')} />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            {...register('email')}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            {...register('password', { minLength: 6 })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register('password2')}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

export default Register;
