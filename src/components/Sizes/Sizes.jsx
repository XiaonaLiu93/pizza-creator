import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Size from '../Size';
import SizesContainer from './style';
import SelectedSizePropTypes from '../../propTypes/SelectedSize';

export default function Sizes({ selectedSize, onSizeSelected }) {
  const sizes = [
    {
      name: 'large',
      price: 13.99,
      inch: 13,
    }, {
      name: 'medium',
      price: 11.99,
      inch: 11,
    }, {
      name: 'small',
      price: 9.99,
      inch: 9,
    },
  ];

  return (
    <section>
      <Title>Select Your Pizza</Title>
      <SizesContainer>
        {
          sizes.map((size) => (
            <Size
              key={size.name}
              size={size}
              selectedSize={selectedSize}
              onSizeSelected={onSizeSelected}
            />
          ))
        }
      </SizesContainer>
    </section>
  );
}

Sizes.propTypes = {
  selectedSize: PropTypes.shape(SelectedSizePropTypes).isRequired,
  onSizeSelected: PropTypes.func.isRequired,
};
