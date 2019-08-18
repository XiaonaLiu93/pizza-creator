import React from 'react';
import PropTypes from 'prop-types';
import pizzaImg from '../../assets/size/pizza.png';
import { SizeActivated, SizeDeactivated } from './style';
import SelectedSizePropTypes from '../../propTypes/SelectedSize';

export default function Size({ size, selectedSize, onSizeSelected }) {
  const { name, inch } = size;
  const isEqual = name === selectedSize.name;
  const SizeContainer = isEqual ? SizeActivated : SizeDeactivated;

  return (
    <SizeContainer data-testid="size" name={name} onClick={() => onSizeSelected(size)}>
      <img data-testid="size__image" src={pizzaImg} alt={name} />
      <span data-testid="size__details">{`${name}(${inch}")`}</span>
    </SizeContainer>
  );
}

Size.propTypes = {
  size: PropTypes.PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    inch: PropTypes.number,
  }).isRequired,
  selectedSize: PropTypes.shape(SelectedSizePropTypes).isRequired,
  onSizeSelected: PropTypes.func.isRequired,
};
