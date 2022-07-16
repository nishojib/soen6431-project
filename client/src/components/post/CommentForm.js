import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import styled from 'styled-components';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <Postfrom>
      <Commentdiv>
        <H3>Leave a Comment</H3>
      </Commentdiv>
      <Form
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment the post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <Submit><input type='submit' value='Submit' /></Submit>
      </Form>
    </Postfrom>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);

const Postfrom = styled.div`
   background: var(--primary-color);
  padding: 0.5rem;
`;
const Commentdiv = styled.div`
   background: var(--primary-color);
  color: #fff;
  padding: 0.5rem;
`;
const H3 = styled.h3``;
const Form = styled.form`
  >input{
    display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  }
  >textarea{
    display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  }
`;
const Submit = styled.div`
  margin: 1rem 0;
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
  background: var(--dark-color);
  color: #fff;
`;