import React from 'react';
import PropTypes from 'prop-types';
import { Item, ItemPrice } from './style';
import SelectedSize from '../../propTypes/SelectedSize';

export default function SummarySize({ selectedSize }) {
  const { name, price } = selectedSize;
  return (
    <Item>
      <span>{`${name} Pizza`}</span>
      <ItemPrice>{`$${price}`}</ItemPrice>
    </Item>
  );
}

SummarySize.propTypes = {
  selectedSize: PropTypes.shape(SelectedSize).isRequired,
};
