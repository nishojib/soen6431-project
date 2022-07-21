import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <Profiletop>
      <img className="round-img my-1" src={avatar} alt="" />
      <H1 className="large">{name}</H1>
      <P className="lead">
        {status} {company ? <span> at {company}</span> : null}
      </P>
      <P>{location ? <span>{location}</span> : null}</P>
      <Icons>
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        ) : null}
        {social
          ? Object.entries(social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${key} fa-2x`}></i>
                </a>
              ))
          : null}
      </Icons>
    </Profiletop>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;

const Profiletop = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--primary-color);
  color: #fff;
  padding: 2rem;
  > img{
    width: 250px;
    border-radius: 50%;
    margin: 1rem 0;
  }

`;

const H1 = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;
const P = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const Icons = styled.div`
  color: #fff;
  margin: 0 0.3rem;
  margin: 1rem 0;
`;