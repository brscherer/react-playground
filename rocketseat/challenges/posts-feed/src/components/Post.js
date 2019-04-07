import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = ({ data }) => {
  const {
    avatar, name, time, body,
  } = data;

  return (
    <article className="post">
      <PostHeader avatar={avatar} name={name} time={time} />
      <p>{body}</p>
    </article>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
