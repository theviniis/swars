import React from 'react';
import NewPost from './NewPost';
import PostCard from './PostCard';

const Feed = () => {
  return (
    <div className='feed'>
      <h2 className='page-title'>Home</h2>
      <NewPost />
      <PostCard />
    </div>
  );
};

export default Feed;
