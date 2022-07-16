import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import styled from 'styled-components';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <SectionContainer>
      <H1>Sign In</H1>
      <P>
        <i className="fas fa-user" /> Sign Into Your Account
      </P>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </FormGroup>
        <Input>
          <input type="submit" value="Login" />
        </Input> 
      </Form>
      <RegisterLink>
        Don't have an account? <Link to="/register">Up</Link>
      </RegisterLink>
    </SectionContainer>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

const Input = styled.div`
  display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  background: var(--primary-color);
  color: #fff;
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

const H1 = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--primary-color);

`;
const P = styled.div`
   font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const RegisterLink = styled.div`
   margin: 1rem 0;
`;
const SectionContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;