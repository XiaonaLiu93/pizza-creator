import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import SubmitButton from './SubmitButton';

test('render submit button', () => {
  const onSubmitButtonClickedSpy = sinon.spy();
  const { getByTestId } = render(<SubmitButton onSubmitButtonClicked={onSubmitButtonClickedSpy} />);

  fireEvent.click(getByTestId('button'));
  sinon.assert.calledOnce(onSubmitButtonClickedSpy);
});
