
import React from 'react';

function UserForm({
  handleChange,
  handleSubmit,
  firstName,
  lastName,
  age,
  select,
  radio,
  nutsFree,
  lactoseFree,
  vegan,
}) {
  return (
    <>
      <div id='form'>
        <form action='' method='GET' onSubmit={handleSubmit}>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={handleChange}
          />
          <br />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={handleChange}
          />
          <br />
          <input
            type='text'
            name='age'
            placeholder='Age'
            value={age}
            onChange={handleChange}
          />
          <br />
          <label htmlFor='male'>Male</label>
          <input
            type='radio'
            id='male'
            name='radio'
            value='male'
            checked={radio === 'male'}
            onChange={handleChange}
          />
          <label htmlFor='female'>Female</label>
          <input
            type='radio'
            id='female'
            name='radio'
            value='female'
            checked={radio === 'female'}
            onChange={handleChange}
          />
          <br />
          <select name='select' id='destination' value={select} onChange={handleChange}>
            <option value='Thailand'>Thailand</option>
            <option value='Japan'>Japan</option>
            <option value='Brazil'>Brazil</option>
          </select>

          <p>Dietary restrictions</p>
          <label htmlFor='id1'>Nuts free</label>
          <input
            type='checkbox'
            id='id1'
            name='nutsFree'
            value='Nuts free'
            checked={nutsFree}
            onChange={handleChange}
          />
          <label htmlFor='id2'>Lactose free</label>
          <input
            type='checkbox'
            id='id2'
            name='lactoseFree'
            value='Lactose free'
            checked={lactoseFree}
            onChange={handleChange}
          />
          <label htmlFor='id3'>Vegan</label>
          <input
            type='checkbox'
            id='id3'
            name='vegan'
            value='Vegan'
            checked={vegan}
            onChange={handleChange}
          />
          <br />
          <input type='submit' value='submit' />
        </form>
      </div>
    </>
  );
}

export default UserForm;
