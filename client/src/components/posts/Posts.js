import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import styled from 'styled-components';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <SectionContainer>
      <H1 className="large text-primary">Posts</H1>
      <P>
        <i className="fas fa-user" /> Welcome to the community
      </P>
      <PostForm />
      <Postsdiv>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </Postsdiv>
    </SectionContainer>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);

const SectionContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;
const H1 = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--primary-color);

`;
const P = styled.div`
   font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Postsdiv = styled.div``;