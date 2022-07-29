import React from 'react';
import SearchBar from '../shared/SearchBar';
import UserList from './UserList';

const ProfileList = () => {
  return (
    <div className='user-list-container'>
      <SearchBar />
      <UserList />
    </div>
  );
};

export default ProfileList;
