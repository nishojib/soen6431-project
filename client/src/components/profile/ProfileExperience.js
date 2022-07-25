import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import styled from 'styled-components';

const StyedExp = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: #ccc 1px dotted;

  & h2 {
    margin-bottom: 1rem;
  }
  & last-child {
    border: 0;
  }
  & p {
    margin: 0.5rem 0;
  }
`;

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <StyedExp>
    <h3 className="text-dark">{company}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </StyedExp>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
