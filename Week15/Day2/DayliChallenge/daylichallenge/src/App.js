// App.js
import React, { useState } from 'react';
import UserForm from './Component/UserForm';
import Summary from './Component/Summary';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [select, setSelect] = useState('');
  const [radio, setRadio] = useState('');
  const [nutsFree, setNutsFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegan, setVegan] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
     
      switch (name) {
        case 'nutsFree':
          setNutsFree(checked);
          break;
        case 'lactoseFree':
          setLactoseFree(checked);
          break;
        case 'vegan':
          setVegan(checked);
          break;
        default:
          break;
      }
    } else {
      // Handle other inputs
      switch (name) {
        case 'firstName':
          setFirstName(value);
          break;
        case 'lastName':
          setLastName(value);
          break;
        case 'age':
          setAge(value);
          break;
        case 'select':
          setSelect(value);
          break;
        case 'radio':
          setRadio(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = () => {
    console.log('hello');
  };

  return (
    <div>
      <header>Sample form</header>
      <UserForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        firstName={firstName}
        lastName={lastName}
        age={age}
        select={select}
        radio={radio}
        nutsFree={nutsFree}
        lactoseFree={lactoseFree}
        vegan={vegan}
      />
      <Summary
        firstName={firstName}
        lastName={lastName}
        age={age}
        select={select}
        radio={radio}
        nutsFree={nutsFree}
        lactoseFree={lactoseFree}
        vegan={vegan}
      />
    </div>
  );
}

export default App;
