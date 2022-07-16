import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Section>
      <H1>Sign Up</H1>
      <P>
        <i className="fas fa-user" /> Create Your Account
      </P>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <FormText>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </FormText>
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </FormGroup>
        <input type="submit" value="Register" />
      </Form>
      <LoginLink>
        Already have an account? <Link to="/login">Sign In</Link>
      </LoginLink>
    </Section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);

const Section = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;
const H1 = styled.div`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;
const P = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const Form = styled.form`
  >input{
    display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  }
`;
const FormGroup = styled.div`
  margin: 1.2rem 0;
  >input{
    display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  }
`;

const LoginLink = styled.div`
   margin: 1rem 0;
`;

const FormText = styled.div`
  display: block;
  margin-top: 0.3rem;
  color: #888;
`;