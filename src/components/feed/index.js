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
      {posts.map(({ firstName, lastName, url, avatar, description }) => (
        <PostCard
          firstName={firstName}
          lastName={lastName}
          url={url}
          description={description}
          avatar={avatar}
        />
      ))}
    </div>
  );
};

export default Feed;
