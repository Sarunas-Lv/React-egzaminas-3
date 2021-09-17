import React from 'react';

const UserDeleteButton = (value, action) => {
  return (
    <button
      className='user-card-button'
      value={value}
      onClick={(e) => action(e)}
    >
      DELETE USER
    </button>
  );
};

export default UserDeleteButton;
