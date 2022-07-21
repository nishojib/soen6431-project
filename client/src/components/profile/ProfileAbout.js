import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <Maincontainer>
    {bio && (
      <Fragment>
        <H2>{name.trim().split(' ')[0]}s Bio</H2>
        <p>{bio}</p>
        <Line/>
      </Fragment>
    )}
    <H2>Skill Set</H2>
    <Skills>
      {skills.map((skill, index) => (
        <Item key={index} >
          <i className='fas fa-check' /> {skill}
        </Item>
      ))}
    </Skills>
  </Maincontainer>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;

const Maincontainer = styled.div`
    grid-area: about;
  text-align: center;
  background: var(--light-color);
  color: #333;
  border: #ccc solid 1px;
  padding: 2rem;
  >h2{
    

  }
`;
const H2 = styled.h3`
  color: var(--primary-color);
`;

const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Line = styled.div`
   height: 1px;
  background: #ccc;
  margin: 1.5rem 0;
`;

const Item = styled.div`
   padding: 1rem;
`;