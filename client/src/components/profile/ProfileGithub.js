import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import styled from 'styled-components';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <Profilegithub>
      <H2>Github Repos</H2>
      {repos.map(repo => (
        <Repo key={repo.id}>
          <div>
            <H4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </H4>
            <P>{repo.description}</P>
          </div>
          <div>
            <ul>
              <Li1 className="badge badge-primary">
                Stars: {repo.stargazers_count}
              </Li1>
              <Li2 className="badge badge-dark">
                Watchers: {repo.watchers_count}
              </Li2>
              <Li3 className="badge badge-light">Forks: {repo.forks_count}</Li3>
            </ul>
          </div>
        </Repo>
      ))}
    </Profilegithub>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);

const Profilegithub = styled.div`
  grid-area: github;
  > div:last-child {
  flex: 3;
  flex-basis: 20%;
}
`;
const H2 = styled.h2`
  color: var(--primary-color);
  margin: 1rem 0;

`;
const Repo = styled.div`
  display: flex;
  > div:first-child {
  flex: 7;
  flex-basis: 70%;
  }
  background: #fff;
  color: #333;
  border: #ccc solid 1px;
  margin: 1rem 0;
  padding: 1rem;


`;

const H4 = styled.h4``;
const P = styled.p``;

const Li1 = styled.li`
background: var(--primary-color);
  color: #fff;
  font-size: 0.8rem;
  padding: 0.1rem;
  text-align: center;
  margin: 0.3rem;
  background: var(--light-color);
  color: #333;
`;
const Li2 = styled.li`
  background: var(--dark-color);
  color: #fff;
  font-size: 0.8rem;
  padding: 0.1rem;
  text-align: center;
  margin: 0.3rem;
  background: var(--light-color);
  color: #333;
`;

const Li3 = styled.l`
   background: var(--light-color);
  color: #333;
  font-size: 0.8rem;
  padding: 0.1rem;
  text-align: center;
  margin: 0.3rem;
  background: var(--light-color);
  color: #333;
`;