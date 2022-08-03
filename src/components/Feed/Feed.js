import React from 'react';
import NewPost from './NewPost';
import PostCard from './PostCard';
import { GlobalContext } from '../../GlobalContext';
import Page from '../Shared/Page';

const Feed = () => {
  const { posts } = React.useContext(GlobalContext);
  //calls posts from global contex

  return (
    <Page name='Feed'>
      <NewPost />
      {posts.map(({ name, url, avatar, description }, index) => (
        // render each post passing props
        <PostCard
          name={name}
          url={url}
          description={description}
          avatar={avatar}
          key={`${name}-${index}`}
        />
      ))}
    </Page>
  );
};

export default Feed;
