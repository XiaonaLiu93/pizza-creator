import React from 'react';
import PropTypes from 'prop-types';
import { Item, ItemPrice } from './style';
import SelectedSize from '../../propTypes/SelectedSize';

export default function SummarySize({ selectedSize }) {
  const { name, price } = selectedSize;
  return (
    <Item>
      <span data-testid="size__name">{`${name} Pizza`}</span>
      <ItemPrice data-testid="size__price">{`$${price}`}</ItemPrice>
    </Item>
  );
}

SummarySize.propTypes = {
  selectedSize: PropTypes.shape(SelectedSize).isRequired,
};
