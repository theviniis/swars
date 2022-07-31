import React from 'react';
import { ReactComponent as UploadImg } from '../../assets/img.svg';
import { GlobalContext } from '../../GlobalContext';
import Avatar from '../shared/Avatar';
import BorderLine from '../shared/BorderLine';
import Button from '../shared/Button';

const NewPost = () => {
  const global = React.useContext(GlobalContext);
  const [inputText, setInputText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    return global.setPosts([
      {
        name: 'Storm Trooper',
        url: '@stormtrooper',
        avatar: global.avatar,
        description: inputText,
      },
      ...global.posts,
    ]);
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
          onChange={(e) => setInputText(e.target.value)}
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
