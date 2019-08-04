import renderErrorMessageBox from './renderErrorMessageBox';
import renderEnterYourDetails from './renderEnterYourDetails';
import renderSelectYourSize from './renderSelectYourSize';
import renderChooseYourToppings from './renderChooseYourToppings';
import renderSummary from './renderSummary';
import renderButtons from './renderButtons';
import render from './render';

import anchovyImg from '../assets/toppings/anchovy.svg'; 
import baconImg from '../assets/toppings/bacon.svg'; 
import basilImg from '../assets/toppings/basil.svg'; 
import chiliImg from '../assets/toppings/chili.svg';
import mozzarellaImg from '../assets/toppings/mozzarella.svg'; 
import mushroomImg from '../assets/toppings/mushroom.svg'; 
import oliveImg from '../assets/toppings/olive.svg'; 
import onionImg from '../assets/toppings/onion.svg';
import pepperImg from '../assets/toppings/pepper.svg'; 
import pepperoniImg from '../assets/toppings/pepperoni.svg'; 
import sweetcornImg from '../assets/toppings/sweetcorn.svg'; 
import tomatoImg from '../assets/toppings/tomato.svg';

export default function renderPizzaCreator() {
  let initialState = {
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
      image: anchovyImg,
    }, {
      name: 'bacon',
      price: 0.69,
      image: baconImg,
    }, {
      name: 'basil',
      price: 0.69,
      image: basilImg,
    }, {
      name: 'chili',
      price: 0.69,
      image: chiliImg,
    }, {
      name: 'mozzarella',
      price: 0.69,
      image: mozzarellaImg,
    }, {
      name: 'mushroom',
      price: 0.69,
      image: mushroomImg,
    }, {
      name: 'olive',
      price: 0.69,
      image: oliveImg,
    }, {
      name: 'onion',
      price: 0.69,
      image: onionImg,
    }, {
      name: 'pepper',
      price: 0.69,
      image: pepperImg,
    }, {
      name: 'pepperoni',
      price: 0.69,
      image: pepperoniImg,
    }, {
      name: 'sweetcorn',
      price: 0.69,
      image: sweetcornImg,
    }, {
      name: 'tomato',
      price: 0.69,
      image: tomatoImg,
    }],
  
    selectedSize: {
      name: 'large',
      price: 13.99,
    },

    chosenToppings: [],
  };

  let state = {...initialState};

  const DETAIL_ERROR_CLASS_NAME = 'detail--error';
  const HIDDEN_ERROR_CLASS_NAME = 'message--hidden';

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

    render({ 
      state, 
      onInputChange, 
      onSizeClick, 
      onDecreaseButtonClick, 
      onIncreaseButtonClick, 
      onSubmitButtonClick,
      onResetButtonClick 
    });
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

    render({ 
      state, 
      onInputChange, 
      onSizeClick, 
      onDecreaseButtonClick, 
      onIncreaseButtonClick, 
      onSubmitButtonClick,
      onResetButtonClick 
    });
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

  function showEmptyInput() {
    const { inputs } = state;

    inputs.forEach((input) => {
      if (input.value.length !== 0) {
        return;
      }

      const detailInput = document.querySelector(`input[name='${input.label}']`);

      const parentNode = getInputParentNode(detailInput);

      showErrorMessage(parentNode);
    });
  }

  function showErrorMessageBox(errorMessageBox) {
    errorMessageBox.classList.remove(HIDDEN_ERROR_CLASS_NAME);
  }

  function showEmptyChosenRTopping() {
    const { chosenToppings } = state;
    const errorMessageBox = document.querySelector('.message');

    if (chosenToppings.length === 0) {
      showErrorMessageBox(errorMessageBox);
    }
  }

  function onSubmitButtonClick() {
    showEmptyInput();
    showEmptyChosenRTopping();
  }

  function onResetButtonClick() {
    state = {...initialState};

    render({ 
      state, 
      onInputChange, 
      onSizeClick, 
      onDecreaseButtonClick, 
      onIncreaseButtonClick, 
      onSubmitButtonClick,
      onResetButtonClick 
    });
  }
  
  const pizzaCreator = document.createElement('div');
  pizzaCreator.classList.add('pizzaCreator');

  const errorMessageBox = renderErrorMessageBox();
  const enterYourDetails = renderEnterYourDetails({ state, onInputChange });
  const selectYourSize = renderSelectYourSize({ state, onSizeClick });
  const chooseYourToppings = renderChooseYourToppings({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  const summary= renderSummary({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  const buttons = renderButtons({ onSubmitButtonClick, onResetButtonClick });
  
  pizzaCreator.append(errorMessageBox, enterYourDetails, selectYourSize, chooseYourToppings, summary, buttons);

  return pizzaCreator;
}