import React from 'react';
import Title from '../Title';
import Input from '../Input';
import './inputs.css';

export default function Inputs() {
  const inputs = [
    {
      name: 'name',
      label: 'name',
    }, {
      name: 'email',
      label: 'email',
    }, {
      name: 'confirmEmail',
      label: 'confirm email',
    }, {
      name: 'address',
      label: 'address',
    }, {
      name: 'postcode',
      label: 'postcode',
    }, {
      name: 'contactNumber',
      label: 'contact number',
    }
  ];

  return (
    <section>
      <Title>Enter Your Details</Title>
      <form className="inputs">
        {
          inputs.map((input) =>
            <Input 
              key={input.name} 
              input={input} 
            />)
        }
      </form>
    </section>
  );
}