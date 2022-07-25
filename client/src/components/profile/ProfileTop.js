import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledProfileTop = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 250px;
`;

const StyledIcons = styled.div`
  & a {
    color: #fff;
    margin: 0 0.3rem;
  }
  & a:hover {
    color: var(--dark-color);
`;

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
    <StyledProfileTop className="bg-primary p-2">
      <StyledImage className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company ? <span> at {company}</span> : null}
      </p>
      <p>{location ? <span>{location}</span> : null}</p>
      <StyledIcons className="my-1">
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
      </StyledIcons>
    </StyledProfileTop>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
