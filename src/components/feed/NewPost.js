import React from 'react';
import { ReactComponent as UploadImg } from '../../assets/img.svg';
import Avatar from '../shared/Avatar';
import BorderLine from '../shared/BorderLine';
import Button from '../shared/Button';

const NewPost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <div className='new-post card'>
      <Avatar />
      <form onSubmit={handleSubmit} className='new-post__form'>
        <textarea
          name=''
          id=''
          placeholder='O que está acontecendo?'
          cols='1'
          rows='2'
        ></textarea>
        <BorderLine />
        <div className='form__controls'>
          <UploadImg className='icon' />
          <Button>Postar</Button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
