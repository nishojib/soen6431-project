import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import usePostForm from '../../customhooks/usePostForm';
import styled from 'styled-components';

const PostForm = ({ addPost }) => {
  const [text, setText] = usePostForm('');

  return (
    <Postfrom>
      <Commentdiv>
        <H3>Say Something...</H3>
      </Commentdiv>
      <Form
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');}}>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' value='Submit' />
      </Form>
    </Postfrom>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);


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
  margin: 1rem 0;
  >input{
    
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
  margin: 1rem 0;
  }
  >textarea{
    display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  }
`;