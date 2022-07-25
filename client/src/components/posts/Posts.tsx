import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostType } from '../../model';
import { getPosts, selectPosts } from '../../redux/actions/post';
import PostForm from './PostForm';
import PostItem from './PostItem';

const Posts = () => {
  const dispatch = useDispatch();
  const posts: PostType[] = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const renderPosts = posts.map((post) => (
    <PostItem key={post._id} post={post} />
  ));

  return (
    <section className="container">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <PostForm />
      <div className="posts">{renderPosts}</div>
    </section>
  );
};

export default Posts;
