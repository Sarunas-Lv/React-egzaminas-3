// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUserForm = () => {
  // Hooks
  // -- States
  // --- local
  const [upadteId, setUpadteId] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateAge, setUpdateAge] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updatePassword, setUpdatePassword] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');
  const [users, setUsers] = useState([]);

  //  Variables
  const USERS_URI = 'http://localhost:5000/api/users/';

  // Effects
  useEffect(() => {
    axios.get(USERS_URI).then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  // Custom functions
  const updateUser = (e) => {
    e.preventDefault();
    // variables
    console.log('_id', upadteId);
    console.log('name', updateName);
    console.log('age', updateAge);
    console.log('email', updateEmail);
    console.log('password', updatePassword);

    const userId = upadteId;
    axios
      .put(USERS_URI + userId, {
        name: updateName,
        age: +updateAge,
        email: updateEmail,
        password: updatePassword,
      })
      .then((response) => {
        console.log(response);
        setUpdateMessage(`Vartotojas ${updateName} Atnaujintas!`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='common-parent-div'>
      <h2>Atnaujinti Vartotoją</h2>
      <section className='section-default'>
        <form onSubmit={updateUser} className='create-user-form'>
          <div className='form-control'>
            <label className='form-label' htmlFor='upadteId'>
              Vartotojo ID
            </label>
            <select
              className='form-select'
              name='upadteId'
              id='upadteId'
              onChange={(e) => {
                setUpadteId(e.target.value);
              }}
            >
              {users.map((user) => (
                <option value={user._id} key={user._id}>
                  {user._id}
                </option>
              ))}
            </select>
          </div>
          <div className='form-control'>
            <label className='form-label' htmlFor='updateName'>
              Vardas
            </label>
            <input
              className='form-input'
              type='text'
              required
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='updateAge'>
              Metai
            </label>
            <input
              className='form-input'
              type='text'
              required
              value={updateAge}
              onChange={(e) => setUpdateAge(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='updateEmail'>
              El. Paštas
            </label>
            <input
              className='form-input'
              type='text'
              required
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='updatePassword'>
              Slaptažodis
            </label>
            <input
              className='form-input'
              type='password'
              required
              value={updatePassword}
              onChange={(e) => setUpdatePassword(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <input
              type='submit'
              value='ATNAUJINTI VARTOTOJĄ'
              className='common-button'
            />
          </div>
        </form>
        <p id='updateMessage' className='form-message'>
          {updateMessage}
        </p>
      </section>
    </div>
  );
};

export default UpdateUserForm;
