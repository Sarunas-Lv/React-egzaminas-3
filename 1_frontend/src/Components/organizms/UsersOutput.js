// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersOutput = () => {
  // Hooks
  // -- States
  // --- local
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/users').then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, [users]);

  // Variables
  const DELETE_USER = 'http://localhost:5000/api/users/delete/';

  // Custom Functions
  return (
    <section className='section-default users-output-section'>
      {users.map((user) => (
        <div className='user-card' id={user._id} key={user._id}>
          <p className='user-card-name'>
            <b>{user.name}</b>
          </p>
          <p className='user-card-values'>Email: {user.email}</p>
          <p className='user-card-values'>Age: {user.age}</p>
          <p className='user-card-values'>Password: {user.password}</p>
          <p className='user-card-id'>
            _id: <i>{user._id}</i>{' '}
          </p>
          <button className='user-card-button' value={user._id}>
            DELETE USER
          </button>
        </div>
      ))}
    </section>
  );
};

export default UsersOutput;
