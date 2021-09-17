import React from 'react';

const UserCard = ({ user, action }) => {
  return (
    <div className='user-card' id={user._id} key={user._id}>
      <p className='user-card-name'>
        <b>{user.name}</b>
      </p>
      <div className=''>
        <p className='user-card-values'>El. Paštas: {user.email}</p>
        <p className='user-card-values'>Metai: {user.age}</p>
        <p className='user-card-values'>Slaptažodis: {user.password}</p>
      </div>
      <p className='user-card-id'>
        _id: <i>{user._id}</i>{' '}
      </p>
      <button
        className='common-button'
        value={user._id}
        onClick={(e) => action(e)}
      >
        IŠTRINTI VARTOTOJĄ
      </button>
    </div>
  );
};

export default UserCard;
