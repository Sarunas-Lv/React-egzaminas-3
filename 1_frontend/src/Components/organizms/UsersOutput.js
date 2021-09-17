// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../molecules/UserCard';

const UsersOutput = () => {
  // Hooks
  // -- States
  // --- local
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/users').then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  // Variables
  const DELETE_USER = 'http://localhost:5000/api/users/delete/';

  // Custom Functions
  const deleteUser = (e) => {
    const userId = e.target.value;
    axios
      .delete(DELETE_USER + userId)
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err));
  };
  return (
    <div className='common-parent-div'>
      {' '}
      <h2>Visi vartotojai</h2>
      <section className='section-default users-output-section'>
        {users.map((user) => (
          <UserCard user={user} action={deleteUser} />
        ))}
      </section>
    </div>
  );
};

export default UsersOutput;
