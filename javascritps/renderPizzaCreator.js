function renderPizzaCreator() {
  let state = {
    inputs: [{
      label: 'name',
      value: '',
    }, {
      label: 'email',
      value: '',
    }, {
      label: 'confirm email',
      value: '',
    }, {
      label: 'address',
      value: '',
    }, {
      label: 'postcode',
      value: '',
    }, {
      label: 'contact number',
      value: '',
    }],

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

    toppings: [{
      name: 'anchovy',
      price: 0.69,
    }, {
      name: 'bacon',
      price: 0.69,
    }, {
      name: 'basil',
      price: 0.69,
    }, {
      name: 'chili',
      price: 0.69,
    }, {
      name: 'mozzarella',
      price: 0.69,
    }, {
      name: 'mushroom',
      price: 0.69,
    }, {
      name: 'olive',
      price: 0.69,
    }, {
      name: 'onion',
      price: 0.69,
    }, {
      name: 'pepper',
      price: 0.69,
    }, {
      name: 'pepperoni',
      price: 0.69,
    }, {
      name: 'sweetcorn',
      price: 0.69,
    }, {
      name: 'tomato',
      price: 0.69,
    }],
  
    selectedSize: {
      name: 'large',
      price: 13.99,
    },

    chosenToppings: [],
  };

  const DETAIL_ERROR_CLASS_NAME = 'detail--error';

  function getInputParentNode(detailInput) {
    return detailInput.closest('.detail');
  }

  function removeErrorMessage(parentNode) {
    parentNode.classList.remove(DETAIL_ERROR_CLASS_NAME);
  }
  
  function showErrorMessage(parentNode) {
    parentNode.classList.add(DETAIL_ERROR_CLASS_NAME);
  }

  function setStateByDetails(newInputs) {
    state = {
      ...state,
      inputs: [...newInputs],
    }
  }

  function onInputChange(detailInput) {
    const { inputs } = state;

    const newInputs = inputs.map((input) => {
      if (input.label !== detailInput.name) {
        return input;
      }

      return {
        label: detailInput.name,
        value: detailInput.value,
      }
    });

    setStateByDetails(newInputs);

    const input = state.inputs.find((input) => input.label === detailInput.name);
    const parentNode = getInputParentNode(detailInput);

    if (input.value.length === 0) {
      showErrorMessage(parentNode);
      return;
    }

    removeErrorMessage(parentNode);
  }

  function setStateBySize(newSelectedSize) {
    state = {
      ...state,
      selectedSize: {...newSelectedSize},
    }
  }

  function renderSizesDiv(newChosenToppings) {
    setStateBySize(newChosenToppings);
    render({ state, onInputChange, onSizeClick, onDecreaseButtonClick, onIncreaseButtonClick });
  }

  function onSizeClick(name) {
    const { sizes } = state;
    const newSelectedSize = sizes.find((size) => size.name === name);
    renderSizesDiv(newSelectedSize);
  }

  function setStateByToppings(newChosenToppings) {
    state = {
      ...state,
      chosenToppings: [...newChosenToppings]
    };
  }

  function renderToppingsDiv(newChosenToppings) {
    setStateByToppings(newChosenToppings);
    render({ state, onInputChange, onSizeClick, onDecreaseButtonClick, onIncreaseButtonClick });
  }

  function lastTimeDecreaseClick(name) {
    const { chosenToppings } = state;

    const newChosenToppings = chosenToppings.filter(({ name: chosenToppingName }) => {
      return chosenToppingName !== name;
    });

    renderToppingsDiv(newChosenToppings);
  }

  function fullTimeDecreseClick(name) {
    const { chosenToppings } = state;

    const newChosenToppings = chosenToppings.map((chosenTopping) => {
      if (chosenTopping.name === name) {
        chosenTopping.amount -= 1;
      }

      return chosenTopping;
    });

    renderToppingsDiv(newChosenToppings);
  }

  function onDecreaseButtonClick(name) {
    const { chosenToppings } = state;

    const chosenTopping = chosenToppings.find(({ name: chosenToppingName }) => {
      return chosenToppingName === name;
    });

    if (!chosenTopping) {
      return;
    }

    if (chosenTopping.amount === 1) {
      lastTimeDecreaseClick(name);
      return;
    }

    fullTimeDecreseClick(name);
  }

  function firstTimeIncreaseClick(name) {
    const { toppings, chosenToppings } = state;

    const newTopping = toppings.find(({ name: thatName}) => {
      return name === thatName;
    });

    const newChosenToppings = [
      ...chosenToppings,
      {
        ...newTopping,
        amount: 1,
      }
    ];

    renderToppingsDiv(newChosenToppings);
  }

  function fullTimeIncreseClick(name) {
    const { chosenToppings } = state;

    const newChosenToppings = chosenToppings.map((chosenTopping) => {
      if (chosenTopping.name === name) {
        chosenTopping.amount += 1;
      }

      return chosenTopping;
    });

    renderToppingsDiv(newChosenToppings);

    return;
  }

  function onIncreaseButtonClick(name) {
    const { chosenToppings } = state;
    
    const chosenTopping = chosenToppings.find(({ name: chosenToppingName }) => {
      return chosenToppingName === name;
    });

    if (!chosenTopping) {
      firstTimeIncreaseClick(name);
      return;
    }

    fullTimeIncreseClick(name);
  }
  
  const pizzaCreator = document.createElement('div');
  pizzaCreator.classList.add('pizzaCreator');

  const enterYourDetails = renderEnterYourDetails({ state, onInputChange });
  const selectYourSize = renderSelectYourSize({ state, onSizeClick });
  const chooseYourToppings = renderChooseYourToppings({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  const summary= renderSummary({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  
  pizzaCreator.append(enterYourDetails, selectYourSize, chooseYourToppings, summary);

  return pizzaCreator;
}