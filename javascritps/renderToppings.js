function renderToppings({ state }) {
  function setState(newChosenToppings) {
    state = {
      ...state,
      chosenToppings: [...newChosenToppings]
    };
  }

  function renderToppingsDiv() {
    toppingsDiv.innerHTML = null;

    const { toppings, chosenToppings } = state;
    const toppingDivs = toppings.map((topping) => {
      return renderTopping({ topping, chosenToppings, onDecreaseButtonClick, onIncreaseButtonClick });
    });

    toppingsDiv.append(...toppingDivs);
  }

  function render(newChosenToppings) {
    setState(newChosenToppings);
    renderToppingsDiv();
  }

  function lastTimeDecreaseClick(name) {
    const { chosenToppings } = state;

    const newChosenToppings = chosenToppings.filter(({ name: chosenToppingName }) => {
      return chosenToppingName !== name;
    });

    render(newChosenToppings);
  }

  function fullTimeDecreseClick(name) {
    const { chosenToppings } = state;

    const newChosenToppings = chosenToppings.map((chosenTopping) => {
      if (chosenTopping.name === name) {
        chosenTopping.amount -= 1;
      }

      return chosenTopping;
    });

    render(newChosenToppings);
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

    render(newChosenToppings);
  }

  function fullTimeIncreseClick(name) {
    const { chosenToppings } = state;

    const newChosenToppings = chosenToppings.map((chosenTopping) => {
      if (chosenTopping.name === name) {
        chosenTopping.amount += 1;
      }

      return chosenTopping;
    });

    render(newChosenToppings);

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

  const toppingsDiv = document.createElement('div');
  toppingsDiv.classList.add('toppings');

  renderToppingsDiv();

  return toppingsDiv;
}