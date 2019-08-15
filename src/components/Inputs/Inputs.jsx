import React from 'react';
import Title from '../Title';
import Input from '../Input';
import { InputsForm } from './style';

export default function Inputs({ details, submitted, onInputChanged }) {
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
      <InputsForm>
        {
          inputs.map((input) =>
            <Input 
              key={input.name} 
              input={input}
              details={details}
              submitted={submitted}
              onInputChanged={onInputChanged} 
            />)
        }
      </InputsForm>
    </section>
  );
}