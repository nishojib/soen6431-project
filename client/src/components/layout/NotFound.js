import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <SectionContainer>
      <H1><i className="fas fa-exclamation-triangle" /> Page Not Found</H1>
      <P>Sorry, this page does not exist</P>
    </SectionContainer>
  );
};

export default NotFound;

const SectionContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;
const H1 = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;
const P = styled.div`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;
