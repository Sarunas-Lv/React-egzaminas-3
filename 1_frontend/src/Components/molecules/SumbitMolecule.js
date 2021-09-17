import React from 'react';
import SubmitInput from '../Atoms/SubmitInput';

const SumbitMolecule = ({ value }) => {
  return (
    <div className='form-control'>
      <SubmitInput value={value} />
    </div>
  );
};

export default SumbitMolecule;
