import React from 'react';
import { ReactComponent as UploadImg } from '../../assets/img.svg';
import { GlobalContext } from '../../GlobalContext';
import Avatar from '../Shared/Avatar';
import BorderLine from '../Shared/BorderLine';
import Button from '../Shared/Button';

const NewPost = () => {
  const { user, avatar, posts, setPosts } = React.useContext(GlobalContext);
  //calls props from global context
  const [inputText, setInputText] = React.useState('');
  //input state for textarea

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.length) return;
    //check if the input are empty then return
    return setPosts([
      {
        // adds a new post passing an object
        name: user.name,
        url: user.url,
        avatar: avatar,
        description: inputText,
      },
      ...posts,
      //spread the posts of posts state
    ]);
  };

  return (
    <div className='new-post card'>
      <Avatar />
      <form onSubmit={handleSubmit} className='new-post__form'>
        <textarea
          name='post__input'
          id='post__input'
          placeholder='What is happening?'
          cols='1'
          rows='2'
          maxLength='130'
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
