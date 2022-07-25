import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PostType } from '../../model';
import {
  getPost,
  selectPost,
  selectPostLoading
} from '../../redux/actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postLoading = useSelector(selectPostLoading);
  const post: PostType = useSelector(selectPost);

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  if (postLoading || post === null) {
    return <Spinner />;
  } else {
    const renderComments = post.comments.map((comment) => (
      <CommentItem key={comment._id} comment={comment} postId={post._id} />
    ));

    return (
      <section className="container">
        <Link to="/posts" className="btn">
          Back To Posts
        </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div className="comments">{renderComments}</div>
      </section>
    );
  }
};

export default Post;
