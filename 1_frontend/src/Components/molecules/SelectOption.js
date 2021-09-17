import React from 'react';

const SelectOption = ({ stateUpdater, data }) => {
  const { primaryState, changeState } = stateUpdater;
  return (
    <div className='form-control'>
      <label className='form-label' htmlFor='upadteId'>
        Vartotojo ID
      </label>
      <select
        className='form-select'
        name='upadteId'
        id='upadteId'
        onChange={(e) => {
          changeState(e.target.value);
        }}
      >
        {data.map((user) => (
          <option value={user._id} key={user._id}>
            {user._id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
