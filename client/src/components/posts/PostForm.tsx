import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { PostFormData } from '../../model';
import { addPost } from '../../redux/actions/post';

const PostForm: FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<PostFormData>({
    defaultValues: { text: '' }
  });

  const onSubmit = (data: PostFormData) => {
    dispatch(addPost(data));
    reset();
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          cols={30}
          rows={5}
          placeholder="Create a post"
          {...register('text', { required: true })}
        />
        <button type="submit" className="btn btn-dark my-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
