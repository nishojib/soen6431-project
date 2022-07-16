import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import formatDate from '../../utils/formatDate';
import styled from 'styled-components';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <Td1>{edu.degree}</Td1>
      <td>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
      </td>
      <td>
        <Deletebtn onClick={() => deleteEducation(edu._id)}>Delete</Deletebtn>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <H2>Education Credentials</H2>
      <Table>
        <thead>
          <tr>
            <th>School</th>
            <Th1 >Degree</Th1>
            <Th1 >Years</Th1>
            <th />
          </tr>
        </thead>
        <Tbody>{educations}</Tbody>
      </Table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);

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