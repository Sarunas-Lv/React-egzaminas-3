import React from 'react';

const TextInput = ({ stateUpdater, label, htmlLabel }) => {
  const { primaryState, changeState } = stateUpdater;

  return (
    <div className='form-control'>
      <label className='form-label' htmlFor={htmlLabel}>
        {label}
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

export default TextInput;
