import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatDate from '../../utils/formatDate';

const StyledProfileEducation = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: #ccc 1px dotted;
`;

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <StyledProfileEducation>
    <h3 className="text-dark">{school}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </StyledProfileEducation>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
