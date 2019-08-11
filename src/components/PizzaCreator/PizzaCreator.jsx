import React from 'react';
import EmptyChosenToppingsError from '../EmptyChosenToppingsError';
import Inputs from '../Inputs';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary';
import SubmitButton from '../SubmitButton';
import './PizzaCreator.css';

export default class PizzaCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        name: '',
        email: '',
        confirmEmail: '',
        address: '',
        postcode: '',
        contactNumber: '',
      },

      selectedSize: {
        name: 'large',
        price: '13.99',
      },
  
      chosenToppings: [],

      submitted: false,
    };

    this.changeInput = this.changeInput.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.decreaseChosenToppingAmount = this.decreaseChosenToppingAmount.bind(this);
    this.increaseChosenToppingAmount = this.increaseChosenToppingAmount.bind(this);
    this.clickSubmitButton = this.clickSubmitButton.bind(this);
  }

  setDetails(newDetails) {
    this.setState({
      details: {...newDetails},
    });
  }

  changeInput(name, value) {
    const { details } = this.state;

    const newDetails = {
      ...details,
      [name]: value,
    };

    this.setDetails(newDetails);
  }

  setSelectedSize(newSelectedSize) {
    this.setState({
      selectedSize: newSelectedSize,
    });
  }

  selectSize(size) {
    const newSelectedSize = {
      name: size.name,
      price: size.price,
    }

    this.setSelectedSize(newSelectedSize);
  }

  setChosenToppings(newChosenToppings) {
    this.setState({
      chosenToppings: [...newChosenToppings],
    });
  }

  updateChosenToppingAmount(topping, delta) {
    const { chosenToppings } = this.state;
    
    const newChosenToppings = chosenToppings.map((chosenTopping) => {
      if (topping.name !== chosenTopping.name) {
        return chosenTopping;
      }

      chosenTopping.amount += delta;
      return chosenTopping;
    });

    this.setChosenToppings(newChosenToppings);
  }

  removeFromChosenTopping(topping) {
    const { chosenToppings } = this.state;

    const newChosenToppings = chosenToppings.filter(({ name }) => {
      return name !== topping.name;
    });

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
      }
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

  setDetailSubmitted(newStatus) {
    this.setState({
      submitted: newStatus,
    });
  }

  clickSubmitButton(newStatus) {
    this.setDetailSubmitted(newStatus);
  }

  render() {
    const { details, selectedSize, chosenToppings, submitted } = this.state;

    return (
      <div className="pizza-creator">
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
        <SubmitButton 
          onSubmitButtonClicked={this.clickSubmitButton}
        />
      </div>
    );
  }
}