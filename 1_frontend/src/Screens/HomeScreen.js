import React from 'react';
import CreateUserForm from '../Components/organizms/CreateUserForm';
import UpdateUserForm from '../Components/organizms/UpdateUserForm';
import UsersOutput from '../Components/organizms/UsersOutput';

const HomeScreen = () => {
  return (
    <main>
      <div className='container'>
        <UsersOutput />
        <UpdateUserForm />
        <CreateUserForm />
      </div>
    </main>
  );
};

export default HomeScreen;
