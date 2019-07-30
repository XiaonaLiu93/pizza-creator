function renderPizzaCreator() {
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
  const pizzaCreator = document.createElement('div');
  pizzaCreator.classList.add('pizzaCreator');

  const selectYourSize = renderSelectYourSize({ state });
  const chooseYourToppings = renderChooseYourToppings({ state });
  
  pizzaCreator.append(selectYourSize, chooseYourToppings);

  return pizzaCreator;
}