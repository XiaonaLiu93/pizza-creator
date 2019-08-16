import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from '../SubmitButton';
import ResetButton from '../ResetButton';
import ButtonsSection from './style';

export default function Buttons({ onSubmitButtonClicked, onResetButtonClicked }) {
  return (
    <ButtonsSection>
      <SubmitButton onSubmitButtonClicked={onSubmitButtonClicked} />
      <ResetButton onResetButtonClicked={onResetButtonClicked} />
    </ButtonsSection>
  );
}

Buttons.propTypes = {
  onSubmitButtonClicked: PropTypes.func.isRequired,
  onResetButtonClicked: PropTypes.func.isRequired,
};
