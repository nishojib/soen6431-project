import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteComment } from '../../actions/post';
import styled from 'styled-components';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <Maindiv>
    <Profilediv>
      <Link to={`/profile/${user}`}>
        <img src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </Profilediv>
    <Postdiv>
      <P1>{text}</P1>
      <P2>Posted on {formatDate(date)}</P2>
      {!auth.loading && user === auth.user._id && (
        <Button
          onClick={() => deleteComment(postId, _id)}
          type="button"
        >
          <i className="fas fa-times" />
        </Button>
      )}
    </Postdiv>
  </Maindiv>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);

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
const Button = styled.div`
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