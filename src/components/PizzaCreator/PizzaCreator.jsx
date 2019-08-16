import React from 'react';
import EmptyChosenToppingsError from '../EmptyChosenToppingsError';
import Inputs from '../Inputs';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary';
import Buttons from '../Buttons';
import PizzaCreatorContainer from './style';

export default class PizzaCreator extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      details: {
        name: {
          value: '',
          showError: false,
        },
        email: {
          value: '',
          showError: false,
        },
        confirmEmail: {
          value: '',
          showError: false,
        },
        address: {
          value: '',
          showError: false,
        },
        postcode: {
          value: '',
          showError: false,
        },
        contactNumber: {
          value: '',
          showError: false,
        },
      },

      selectedSize: {
        name: 'large',
        price: 13.99,
      },

      chosenToppings: [],

      submitted: false,
    };

    this.state = { ...this.initialState };

    this.changeInput = this.changeInput.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.decreaseChosenToppingAmount = this.decreaseChosenToppingAmount.bind(this);
    this.increaseChosenToppingAmount = this.increaseChosenToppingAmount.bind(this);
    this.clickSubmitButton = this.clickSubmitButton.bind(this);
    this.clickResetButton = this.clickResetButton.bind(this);
  }

  setChosenToppings(newChosenToppings) {
    this.setState({
      chosenToppings: [...newChosenToppings],
    });
  }

  setDetailSubmitted(newStatus) {
    this.setState({
      submitted: newStatus,
    });
  }

  setDetails(newDetails) {
    this.setState({
      details: { ...newDetails },
    });
  }

  setSelectedSize(newSelectedSize) {
    this.setState({
      selectedSize: newSelectedSize,
    });
  }

  changeInput(name, value) {
    const { details } = this.state;

    const newDetails = {
      ...details,
      [name]: {
        value,
        showError: true,
      },
    };

    this.setDetails(newDetails);
  }

  selectSize(size) {
    const newSelectedSize = {
      name: size.name,
      price: size.price,
    };

    this.setSelectedSize(newSelectedSize);
  }

  clickSubmitButton(newStatus) {
    this.setDetailSubmitted(newStatus);
  }

  updateChosenToppingAmount(topping, delta) {
    const { chosenToppings } = this.state;

    const newChosenToppings = chosenToppings.map((chosenTopping) => {
      if (topping.name !== chosenTopping.name) {
        return chosenTopping;
      }

      const newChosenTopping = chosenTopping;
      newChosenTopping.amount += delta;
      return newChosenTopping;
    });

    this.setChosenToppings(newChosenToppings);
  }

  removeFromChosenTopping(topping) {
    const { chosenToppings } = this.state;

    const newChosenToppings = chosenToppings.filter(({ name }) => name !== topping.name);

    this.setChosenToppings(newChosenToppings);
  }

  decreaseChosenToppingAmount(topping, delta = -1) {
    const { chosenToppings } = this.state;
    const chosenTopping = chosenToppings.find(({ name }) => name === topping.name);

    if (!chosenTopping) {
      return;
    }

    if (chosenTopping.amount === 1) {
      this.removeFromChosenTopping(topping);
      return;
    }

    this.updateChosenToppingAmount(topping, delta);
  }

  addToChosenTopping(topping, delta) {
    const { chosenToppings } = this.state;

    const newChosenToppings = [
      ...chosenToppings,
      {
        name: topping.name,
        price: topping.price,
        amount: delta,
      },
    ];

    this.setChosenToppings(newChosenToppings);
  }

  increaseChosenToppingAmount(topping, delta = 1) {
    const { chosenToppings } = this.state;
    const chosenTopping = chosenToppings.find(({ name }) => name === topping.name);

    if (!chosenTopping) {
      this.addToChosenTopping(topping, delta);
      return;
    }

    this.updateChosenToppingAmount(topping, delta);
  }

  clickResetButton() {
    this.setState(this.initialState);
  }

  render() {
    const {
      details, selectedSize, chosenToppings, submitted,
    } = this.state;

    return (
      <PizzaCreatorContainer>
        <EmptyChosenToppingsError
          submitted={submitted}
          chosenToppings={chosenToppings}
        />
        <Inputs
          details={details}
          submitted={submitted}
          onInputChanged={this.changeInput}
        />
        <Sizes
          selectedSize={selectedSize}
          onSizeSelected={this.selectSize}
        />
        <Toppings
          chosenToppings={chosenToppings}
          onAmountDecreased={this.decreaseChosenToppingAmount}
          onAmountIncreased={this.increaseChosenToppingAmount}
        />
        <Summary
          selectedSize={selectedSize}
          chosenToppings={chosenToppings}
          onAmountDecreased={this.decreaseChosenToppingAmount}
          onAmountIncreased={this.increaseChosenToppingAmount}
        />
        <Buttons
          onSubmitButtonClicked={this.clickSubmitButton}
          onResetButtonClicked={this.clickResetButton}
        />
      </PizzaCreatorContainer>
    );
  }
}
