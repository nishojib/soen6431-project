import {
  FC,
  FormEventHandler,
  ForwardRefExoticComponent,
  RefAttributes
} from 'react';
import { UseFormRegister } from 'react-hook-form';
import { LinkProps } from 'react-router-dom';
import { LoginFormData } from '../../../model';

type LoginViewProps = {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  register: UseFormRegister<LoginFormData>;
  link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
};

export const LoginView: FC<LoginViewProps> = ({
  onSubmit,
  register,
  link: Link
}) => (
  <section className="container">
    <h1 className="large text-primary">Sign In</h1>
    <p className="lead">
      <i className="fas fa-user" /> Sign Into Your Account
    </p>
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          {...register('email')}
        />
      </div>
      <div className="form-group">
        <input
          id="password"
          type="password"
          placeholder="Password"
          {...register('password', { minLength: 6 })}
        />
      </div>
      <button id="submit" type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
    <p className="my-1">
      Don't have an account? <Link to="/register">Sign Up</Link>
    </p>
  </section>
);
