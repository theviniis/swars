import React from 'react';
import Avatar from '../Shared/Avatar';
import { ReactComponent as Like } from '../../assets/like.svg';
import { ReactComponent as Comment } from '../../assets/comment.svg';
import { ReactComponent as Share } from '../../assets/share.svg';
import { ReactComponent as LikeFilled } from '../../assets/like-filled.svg';

import BorderLine from '../Shared/BorderLine';

const PostCard = ({ name, url, description }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  //set post like state
  return (
    <div className='post-card card'>
      <Avatar />
      <div className='post-card__content'>
        <div className='content__header'>
          <a href='#teste' className='user-name'>
            {name}
          </a>
          <a href='#teste' className='user-url'>
            {url}
          </a>
        </div>
        <p className='content__desc'>{description}</p>
        <BorderLine />
        <ul className='content__controls'>
          <li className='controls__item'>
            <Share />
          </li>
          <li className='controls__item'>
            <Comment />
          </li>
          <li className='controls__item' onClick={() => setIsLiked(!isLiked)}>
            {
              //toggle liked state
              isLiked ? <LikeFilled /> : <Like />
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostCard;
