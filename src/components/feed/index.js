import React from 'react';
import NewPost from './NewPost';
import PostCard from './PostCard';
import PageTitle from '../shared/PageTitle';
import posts from './posts';

const Feed = () => {
  return (
    <div className='feed'>
      <PageTitle>Home</PageTitle>
      <NewPost />
      {posts.map(({ name, url, avatar, description }, index) => (
        <PostCard
          name={name}
          url={url}
          description={description}
          avatar={avatar}
          key={`${name}-${index}`}
        />
      ))}
    </div>
  );
};

export default Feed;
