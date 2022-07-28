import React from 'react';
import NewPostCard from './NewPostCard';
import PostCard from './PostCard';

const Feed = () => {
  return (
    <div className='feed'>
      <h2 className='page-title'>Home</h2>
      <NewPostCard />
      <PostCard />
    </div>
  );
};

export default Feed;
