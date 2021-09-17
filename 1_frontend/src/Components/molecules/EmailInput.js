import React from 'react';

const EmailInput = ({ stateUpdater, signupEmailInputRef, htmlLabel }) => {
  const { primaryState, changeState } = stateUpdater;
  if (signupEmailInputRef) {
    return (
      <div className='form-control'>
        <label className='form-label' htmlFor={htmlLabel}>
          El. Paštas
        </label>
        <input
          className='form-input'
          type='text'
          required
          value={primaryState}
          onChange={(e) => changeState(e.target.value)}
          ref={signupEmailInputRef}
        />
      </div>
    );
  }
  return (
    <div className='form-control'>
      <label className='form-label' htmlFor={htmlLabel}>
        El. Paštas
      </label>
      <input
        className='form-input'
        type='text'
        required
        value={primaryState}
        onChange={(e) => changeState(e.target.value)}
      />
    </div>
  );
};

export default EmailInput;
