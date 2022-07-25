import { FC } from 'react';

type LoginViewProps = {
  onSubmit: any;
  register: any;
  link: any;
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
