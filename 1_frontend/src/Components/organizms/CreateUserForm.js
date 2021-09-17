// Imports
import React, { useState, useRef } from 'react';
import axios from 'axios';

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
          <div className='form-control'>
            <label className='form-label' htmlFor='signUpName'>
              Vardas
            </label>
            <input
              className='form-input'
              type='text'
              required
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='singUpAge'>
              Metai
            </label>
            <input
              className='form-input'
              type='text'
              required
              value={singUpAge}
              onChange={(e) => setSingUpAge(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='signUpEmail'>
              El. Paštas
            </label>
            <input
              className='form-input'
              type='text'
              required
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              ref={signupEmailInputRef}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='signUpPassword'>
              Slaptažodis
            </label>
            <input
              className='form-input'
              type='password'
              required
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              ref={signupPasswordInputRef}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='signUpConfirmPassword'>
              Pakartoti slaptažodį
            </label>
            <input
              className='form-input'
              type='password'
              required
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <input
              type='submit'
              value='SUKURTI VARTOTOJĄ'
              className='common-button'
            />
          </div>
        </form>
        <p id='signUpMessage' className='form-message'>
          {signupErrorMessage}
        </p>
      </section>
    </div>
  );
};

export default CreateUserForm;
