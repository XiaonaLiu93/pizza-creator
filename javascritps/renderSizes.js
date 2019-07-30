function renderSizes() {
  let state = {
    sizes: [{
      name: 'large',
      price: 13.99,
      inch: '13',
    }, {
      name: 'medium',
      price: 11.99,
      inch: '11',
    }, {
      name: 'small',
      price: 9.99,
      inch: '9',
    }],
    
    selectedSize: {
      name: 'large',
      price: 13.99,
    }
  }

  function onSizeClick(name) {
    const { sizes } = state;
    const newSelectedSize = sizes.find((size) => size.name === name);

    state = {
      ...state,
      selectedSize: {...newSelectedSize},
    }
    
    renderSizesDiv();
  }

  const sizesDiv = document.createElement('div');
  sizesDiv.classList.add('sizes');

  function renderSizesDiv() {
    sizesDiv.innerHTML = null;

    const { sizes, selectedSize } = state;

    const sizeDivs = sizes.map((size) => {
      return renderSize({ size, selectedSize, onSizeClick });
    });

    sizesDiv.append(...sizeDivs);
  }

  renderSizesDiv();

  return sizesDiv;
}