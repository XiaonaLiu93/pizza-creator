import renderSize from './renderSize';

export default function renderSizes({ state, onSizeClick }) {
  const sizesDiv = document.createElement('div');
  sizesDiv.classList.add('sizes');

  const { sizes, selectedSize } = state;

  const sizeDivs = sizes.map((size) => {
    return renderSize({ size, selectedSize, onSizeClick });
  });

  sizesDiv.append(...sizeDivs);

  return sizesDiv;
}