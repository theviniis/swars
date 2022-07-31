import React from 'react';
import NewPost from './NewPost';
import PostCard from './PostCard';
import { GlobalContext } from '../../GlobalContext';
import Page from '../shared/Page';

const Feed = () => {
  const global = React.useContext(GlobalContext);

  return (
    <Page name='Feed'>
      <NewPost />
      {global.posts.map(({ name, url, avatar, description }, index) => (
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
