import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CommentFormData } from '../../model';
import { addComment } from '../../redux/actions/post';

type CommentFormProps = {
  postId: string;
};

const CommentForm: FC<CommentFormProps> = ({ postId }) => {
  const { register, handleSubmit, reset } = useForm<CommentFormData>({
    defaultValues: { text: '' }
  });

  const dispatch = useDispatch();

  const onSubmit = (data: CommentFormData) => {
    dispatch(addComment(postId, data));
    reset();
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a Comment</h3>
      </div>
      <form className="form my-1" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          cols={30}
          rows={5}
          placeholder="Comment the post"
          {...register('text', { required: true })}
        />
        <button type="submit" className="btn btn-dark my-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
