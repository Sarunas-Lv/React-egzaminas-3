import React from 'react';

const UserCard = ({ user, action }) => {
  return (
    <div className='user-card' id={user._id} key={user._id}>
      <p className='user-card-name'>
        <b>{user.name}</b>
      </p>
      <div className='values-container'>
        <p className='user-card-values'>Email: {user.email}</p>
        <p className='user-card-values'>Age: {user.age}</p>
        <p className='user-card-values'>Password: {user.password}</p>
      </div>
      <p className='user-card-id'>
        _id: <i>{user._id}</i>{' '}
      </p>
      <button
        className='user-card-button'
        value={user._id}
        onClick={(e) => action(e)}
      >
        DELETE USER
      </button>
    </div>
  );
};

export default UserCard;
