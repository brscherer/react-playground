import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { avatar, name, time } = props;

  return (
    <div className="post__header">
      <img className="post__avatar" src={avatar} alt="Profile Avatar" />
      <div className="post__details">
        <strong>{name}</strong>
        <span>{time}</span>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
