import {
  FC,
  FormEventHandler,
  ForwardRefExoticComponent,
  RefAttributes
} from 'react';
import { UseFormRegister } from 'react-hook-form';
import { LinkProps } from 'react-router-dom';
import { RegisterFormData } from '../../../model';

type RegisterViewProps = {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  register: UseFormRegister<RegisterFormData>;
  link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
};

export const RegisterView: FC<RegisterViewProps> = ({
  onSubmit,
  register,
  link: Link
}) => {
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
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
