import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardActions = () => {
  return (
    <Dashbtn>
      <Link to='/edit-profile' >
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/add-experience' >
        <i className='fab fa-black-tie text-primary' /> Add Experience
      </Link>
      <Link to='/add-education'>
        <i className='fas fa-graduation-cap text-primary' /> Add Education
      </Link>
    </Dashbtn>
  );
};

export default DashboardActions;

const Dashbtn = styled.div`
    display: block;
    width: 100%;
    margin-bottom: 0.2rem;
    >Link{
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
      background: var(--light-color);
      color: #333;
    }
`;