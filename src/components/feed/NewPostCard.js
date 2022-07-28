import React from 'react';
import avatar from '../../assets/avatar.png';
import { ReactComponent as UploadImg } from '../../assets/img.svg';
import Avatar from '../shared/Avatar';
import Button from '../shared/Button';

const NewPostCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <div className='post-card'>
      <Avatar src={avatar} />
      <form onSubmit={handleSubmit} className='post-card__form'>
        <textarea
          name=''
          id=''
          placeholder='O que está acontecendo?'
          cols='20'
          rows='2'
        ></textarea>
        <div className='form__controls'>
          <UploadImg className='icon' />
          <Button>Postar</Button>
        </div>
      </form>
      <div className='post-card__controls'></div>
    </div>
  );
};

export default NewPostCard;
