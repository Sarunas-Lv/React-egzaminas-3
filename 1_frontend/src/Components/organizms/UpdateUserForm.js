// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import EmailInput from '../molecules/EmailInput';
import PasswordInput from '../molecules/PasswordInput';
import SelectOption from '../molecules/SelectOption';
import TextInput from '../molecules/TextInput';
import SumbitMolecule from '../molecules/SumbitMolecule';

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
          <SelectOption
            data={users}
            stateUpdater={{ primaryState: upadteId, changeState: setUpadteId }}
          />
          <TextInput
            label='Vardas'
            stateUpdater={{
              primaryState: updateName,
              changeState: setUpdateName,
            }}
            htmlLabel='setUpdateName'
          />
          <TextInput
            label='Metai'
            stateUpdater={{
              primaryState: updateAge,
              changeState: setUpdateAge,
            }}
            htmlLabel='setUpdateAge'
          />
          <EmailInput
            stateUpdater={{
              primaryState: updateEmail,
              changeState: setUpdateEmail,
            }}
            htmlLabel='setUpdateEmail'
          />
          <PasswordInput
            stateUpdater={{
              primaryState: updatePassword,
              changeState: setUpdatePassword,
            }}
            htmlLabel='setUpdatePassword'
          />
          <SumbitMolecule value='ATNAUJINTI VARTOTOJĄ' />
        </form>
        <p id='updateMessage' className='form-message'>
          {updateMessage}
        </p>
      </section>
    </div>
  );
};

export default UpdateUserForm;
