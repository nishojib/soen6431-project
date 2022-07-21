import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import styled from 'styled-components';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <Maindiv >
    <Profilediv>
      <Link to={`/profile/${user}`}>
        <img src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </Profilediv>
    <Postdiv>
      <P1 className="my-1">{text}</P1>
      <P2 className="post-date">Posted on {formatDate(date)}</P2>

      {showActions && (
        <Fragment>
          <Button onClick={() => addLike(_id)} type="button">
            <i className="fas fa-thumbs-up" />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </Button>
          <Button
            onClick={() => removeLike(_id)}
            type="button"
            
          >
            <i className="fas fa-thumbs-down" />
          </Button>
          <Button>
            <Link to={`/posts/${_id}`}>
              Discussion{' '}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
          </Button>
          {!auth.loading && user === auth.user._id && (
            <Deletebutton
              onClick={() => deletePost(_id)}
              type="button"
              
            >
              <i className="fas fa-times" />
            </Deletebutton>
          )}
        </Fragment>
      )}
    </Postdiv>
  </Maindiv>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);

const Maindiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 2rem;
  align-items: center;
  background: #fff;
  color: #333;
  border: #ccc solid 1px;
  padding: 1rem;
  margin: 1rem 0;

`;
const Profilediv = styled.div`
  text-align: center;
  >img{
    width: 100px;
    border-radius: 50%;
  }
  >h4{

  }
`;

const Postdiv = styled.div`
  text-align: center;
`;
const P1 = styled.div`
  margin: 1rem 0;
`;
const P2 = styled.div`
  color: #aaa;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const Deletebutton = styled.button`
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

const Button = styled.button`
  background: var(--primary-color);
  color: #fff;
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
  >Link {
    background: var(--primary-color);
  color: #fff;
  }
`;
