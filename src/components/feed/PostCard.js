import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Avatar from '../shared/Avatar';

const PostCard = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div className='post-card card'>
      <Avatar />
      <div className='post-card__content'>
        <div className='content__header'>
          <span className='user-name'>{`${global.firstName} ${global.lastName}`}</span>
          <span className='user-url'>{global.url}</span>
        </div>
        <p className='content_desc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          inventore dicta esse eos voluptas et commodi. Tenetur voluptatum
          similique fuga odio maiores, praesentium molestiae placeat? Aspernatur
          illum, quisquam at laudantium corporis nulla repellat, itaque sint
          soluta non consectetur ut quos? Asperiores dolore veritatis eaque
          provident in, sapiente aliquid! Exercitationem hic qui nobis,
          asperiores eum consequatur vel sint dolores minus soluta
        </p>
        <ul className='controls__list'>
          <li className='controls__item'>comments</li>
          <li className='controls__item'>like</li>
        </ul>
      </div>
    </div>
  );
};

export default PostCard;
