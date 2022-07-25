import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import styled from 'styled-components';

const StyledImage = styled.div`
  width: 100px;
`;
/*
const StyledDate = styled.div`
  color: #aaa;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const StyledComment = styled.div`
  background: var(--light-color);
  color: var(--primary-color);
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
  font-size: 0.8rem;
`;
*/
const StyledPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 2rem;
  align-items: center;

  & first-child {
    text-align: center;
  }

  & post-date {
    color: #aaa;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  & comment-count {
    background: var(--light-color);
    color: var(--primary-color);
    padding: 0.1rem 0.2rem;
    border-radius: 5px;
    font-size: 0.8rem;
  }
`;

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  //<div className="post bg-white p-1 my-1">
  <StyledPosts className="bg-white p-1 my-1">
    <StyledImage>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </StyledImage>
    <div>
      <p className="my-1">{text}</p>
      <p className="post-date">Posted on {formatDate(date)}</p>

      {showActions && (
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-up" />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-down" />
          </button>
          <Link to={`/posts/${_id}`} className="btn btn-primary">
            Discussion{' '}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times" />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </StyledPosts>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
