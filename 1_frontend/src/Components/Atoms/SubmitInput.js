import React from 'react';

const SubmitInput = ({ value }) => {
  return (
    <div>
      <input type='submit' value={value} className='common-button' />
    </div>
  );
};

export default SubmitInput;
