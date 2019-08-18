import React from 'react';
import PropTypes from 'prop-types';
import Button from './style';

export default function ResetButton({ onResetButtonClicked }) {
  return (
    <Button data-testid="button" type="reset" onClick={onResetButtonClicked}>Reset Order</Button>
  );
}

ResetButton.propTypes = {
  onResetButtonClicked: PropTypes.func.isRequired,
};
