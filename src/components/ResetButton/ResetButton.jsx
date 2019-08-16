import React from 'react';
import PropTypes from 'prop-types';
import Button from './style';

export default function ResetButton({ onResetButtonClicked }) {
  return (
    <Button type="reset" onClick={onResetButtonClicked}>Reset Order</Button>
  );
}

ResetButton.propTypes = {
  onResetButtonClicked: PropTypes.func.isRequired,
};
