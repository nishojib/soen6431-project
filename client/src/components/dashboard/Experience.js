import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import formatDate from '../../utils/formatDate';
import styled from 'styled-components';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <Td1>{exp.title}</Td1>
      <td>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
      </td>
      <td>
        <Deletebtn onClick={() => deleteExperience(exp._id)}>Delete</Deletebtn>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <H2>Experience Credentials</H2>
      <Table >
        <thead>
          <tr>
            <th>Company</th>
            <Th1 >Title</Th1>
            <Th1 >Years</Th1>
            <th />
          </tr>
        </thead>
        <Tbody>{experiences}</Tbody>
      </Table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);


const Deletebtn = styled.div`
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
  background: var(--danger-color);
  color: #fff;
`;

const H2 = styled.div`
  margin: 2rem 0;
`;
const Table = styled.div`
  >th{
    padding: 1rem;
  text-align: left;
  background: var(--light-color);
  }
  >td{
    padding: 1rem;
  text-align: left;
  }
`;
const Th1 = styled.div`
padding: 1rem;
  text-align: left;
  background: var(--light-color);
  display: none;
`;
const Td1 = styled.div`
 padding: 1rem;
  text-align: left;
  display: none;
`;

const Tbody = styled.div``;