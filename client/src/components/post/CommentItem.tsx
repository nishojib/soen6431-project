import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CommentType } from '../../model';
import { selectAuthLoading, selectAuthUser } from '../../redux/actions/auth';
import { deleteComment } from '../../redux/actions/post';
import formatDate from '../../utils/formatDate';

type CommentItemProps = {
  postId: string;
  comment: CommentType;
};

const CommentItem: FC<CommentItemProps> = ({
  postId,
  comment: { _id, text, name, avatar, user, date }
}) => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const authUser = useSelector(selectAuthUser);

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
        {!authLoading && user === authUser._id && (
          <button
            onClick={() => dispatch(deleteComment(postId, _id))}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
