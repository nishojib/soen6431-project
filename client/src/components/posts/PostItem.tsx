import { FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostType } from '../../model';
import { selectAuthLoading, selectAuthUser } from '../../redux/actions/auth';
import { addLike, deletePost, removeLike } from '../../redux/actions/post';
import formatDate from '../../utils/formatDate';

type PostItemProps = {
  post: PostType;
  showActions?: boolean;
};

const PostItem: FC<PostItemProps> = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions = true
}) => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const authUser = useSelector(selectAuthUser);

  const handleAddLike = (id: string) => dispatch(addLike(id));
  const handleRemoveLike = (id: string) => dispatch(removeLike(id));
  const handleDeletePost = (id: string) => dispatch(deletePost(id));

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {formatDate(date)}</p>

        {showActions && (
          <Fragment>
            <button
              onClick={() => handleAddLike(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up" />{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => handleRemoveLike(_id)}
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
            {!authLoading && user === authUser._id && (
              <button
                onClick={() => handleDeletePost(_id)}
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default PostItem;
