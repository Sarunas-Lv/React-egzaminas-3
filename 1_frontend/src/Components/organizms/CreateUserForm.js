// Imports
import React, { useState, useRef } from 'react';
import axios from 'axios';

// Components
import EmailInput from '../molecules/EmailInput';
import PasswordInput from '../molecules/PasswordInput';
import TextInput from '../molecules/TextInput';
import SumbitMolecule from '../molecules/SumbitMolecule';

const CreateUserForm = () => {
  // Hooks
  // -- States
  // --- local
  // ------ signup form
  const [signupName, setSignupName] = useState('');
  const [singUpAge, setSingUpAge] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupErrorMessage, setSignupErrorMessage] = useState('');

  // Refs
  const signupPasswordInputRef = useRef();
  const signupEmailInputRef = useRef();

  // Variables
  const CREATE_USER = 'http://localhost:5000/api/users/signup';

  // Custom functions
  const createUser = (e) => {
    e.preventDefault();

    if (signupPassword !== signupConfirmPassword) {
      setSignupErrorMessage('Passwords do not match');

      setSignupPassword('');
      setSignupConfirmPassword('');

      signupPasswordInputRef.current.focus();

      return;
    }

    axios
      .post(CREATE_USER, {
        name: signupName,
        age: +singUpAge,
        email: signupEmail,
        password: signupPassword,
      })
      .then((response) => {
        if (response.data.registrationStatus === 'failed') {
          setSignupErrorMessage(response.data.message);
          setSignupEmail('');
          setSignupPassword('');
          setSignupConfirmPassword('');

          signupEmailInputRef.current.focus();
        } else if (response.data.registrationStatus === 'success') {
          setSignupErrorMessage('Naujas vartotojas bvuo sukurtas!');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='common-parent-div'>
      <h2>Sukurti Naują Vartotoją</h2>
      <section className='section-default'>
        <form
          id='signUpForm'
          className='create-user-form'
          onSubmit={createUser}
        >
          <TextInput
            label='Vardas'
            stateUpdater={{
              primaryState: signupName,
              changeState: setSignupName,
            }}
            htmlLabel='setSignupName'
          />
          <TextInput
            label='Metai'
            stateUpdater={{
              primaryState: singUpAge,
              changeState: setSingUpAge,
            }}
            htmlLabel='setSingUpAge'
          />
          <EmailInput
            stateUpdater={{
              primaryState: signupEmail,
              changeState: setSignupEmail,
            }}
            signupEmailInputRef={signupEmailInputRef}
            htmlLabel='signUpEmail'
          />
          <PasswordInput
            stateUpdater={{
              primaryState: signupPassword,
              changeState: setSignupPassword,
            }}
            signupPasswordInputRef={signupPasswordInputRef}
            htmlLabel='signUpPassword'
          />
          <PasswordInput
            stateUpdater={{
              primaryState: signupConfirmPassword,
              changeState: setSignupConfirmPassword,
            }}
            htmlLabel='signUpConfirmPassword'
          />
          <SumbitMolecule value='SUKURTI VARTOTOJĄ' />
        </form>
        <p id='signUpMessage' className='form-message'>
          {signupErrorMessage}
        </p>
      </section>
    </div>
  );
};

export default CreateUserForm;
