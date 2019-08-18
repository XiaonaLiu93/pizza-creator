import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import ResetButton from './ResetButton';

test('render reset button', () => {
  const onResetButtonClickedSpy = sinon.spy();
  const { getByTestId } = render(<ResetButton onResetButtonClicked={onResetButtonClickedSpy} />);

  fireEvent.click(getByTestId('button'));
  sinon.assert.calledOnce(onResetButtonClickedSpy);
});
