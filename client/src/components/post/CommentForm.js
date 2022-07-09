import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import {useForm} from 'react-hook-form';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  const { register, handleSubmit } = useForm({ 
    defaultValues: text
  });
  const onSubmit = (data) => {
    addComment(data.postId, { text });
    setText('');
  };

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a Comment</h3>
      </div>
      <form className="form my-1" onSubmit={handleSubmit(onSubmit)}>
      
     
      
        <Input
          // name='text'
          // cols='30'
          // rows='5'
          placeholder='Comment the post'
          // value={text}
          // onChange={e => setText(e.target.value)}
          // required
          {...register('text')}
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);

const Input = ({ type = 'text', placeholder, ...rest }) => {
  return (
    <textarea type={type} placeholder={placeholder} {...rest} />
  )
}