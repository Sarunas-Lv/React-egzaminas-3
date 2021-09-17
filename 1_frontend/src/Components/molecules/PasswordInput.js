import React from 'react';

const PasswordInput = ({ stateUpdater, signupPasswordInputRef, htmlLabel }) => {
  const { primaryState, changeState } = stateUpdater;
  if (signupPasswordInputRef) {
    return (
      <div className='form-control'>
        <label className='form-label' htmlFor={htmlLabel}>
          Slaptažodis
        </label>
        <input
          className='form-input'
          type='password'
          required
          value={primaryState}
          onChange={(e) => changeState(e.target.value)}
          ref={signupPasswordInputRef}
        />
      </div>
    );
  }
  return (
    <div className='form-control'>
      <label className='form-label' htmlFor={htmlLabel}>
        Slaptažodis
      </label>
      <input
        className='form-input'
        type='password'
        required
        value={primaryState}
        onChange={(e) => changeState(e.target.value)}
      />
    </div>
  );
};

export default PasswordInput;
