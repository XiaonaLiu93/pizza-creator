import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from './input';
import { InputNoError, InputError } from './style';

describe('render an input', () => {
  let queries;

  const input = {
    name: 'name',
    label: 'name',
  };

  const submitted = false;

  const details = {
    name: {
      value: '',
      showError: false,
    },
    email: {
      value: '',
      showError: false,
    },
    confirmEmail: {
      value: '',
      showError: false,
    },
    address: {
      value: '',
      showError: false,
    },
    postcode: {
      value: '',
      showError: false,
    },
    contactNumber: {
      value: '',
      showError: false,
    },
  };

  beforeEach(() => {
    queries = render(
      <Input
        input={input}
        details={details}
        submitted={submitted}
        onInputChanged={() => {}}
      />,
    );
  });

  afterEach(cleanup);

  test('render label', () => {
    const { getByTestId } = queries;
    const { name, label } = input;

    expect(getByTestId('input__label').htmlFor).toBe(name);
    expect(getByTestId('input__label').textContent).toBe(label);
  });

  test('render error message', () => {
    const { getByTestId } = queries;
    const { label } = input;

    expect(getByTestId('input__error').textContent).toBe(`Please enter your ${label}`);
  });

  test('render input box', () => {
    const { getByTestId } = queries;
    const { name } = input;

    expect(getByTestId('input__box').name).toBe(name);
  });

  test('change value', () => {
    const { getByTestId } = queries;
    userEvent.type(getByTestId('input__box'), 'new');

    expect(getByTestId('input__box').value).toBe('new');
  });

  test('get isError', () => {
    const { name } = input;
    const { value } = details[name];
    const { showError } = details[name];
    const isError = !value && (showError || submitted);

    expect(typeof isError).toBe('boolean');
  });

  test('styled component works', () => {
    const tree = renderer.create(<InputNoError />).toJSON();
    expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.6)');
  });

  test('styled component works', () => {
    const tree = renderer.create(<InputError />).toJSON();
    expect(tree).toHaveStyleRule('color', 'rgba(255,0,0,1)');
  });
});
