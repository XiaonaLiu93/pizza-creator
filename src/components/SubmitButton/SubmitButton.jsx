import React from 'react';
import PropTypes from 'prop-types';
import Button from './style';

export default function SubmitButton({ onSubmitButtonClicked }) {
  return (
    <Button data-testid="button" type="submit" onClick={() => onSubmitButtonClicked(true)}>Place Order</Button>
  );
}

SubmitButton.propTypes = {
  onSubmitButtonClicked: PropTypes.func.isRequired,
};
