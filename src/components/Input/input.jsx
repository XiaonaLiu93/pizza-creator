import React from 'react';
import './input.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: false,
    };

    this.setShowError= this.setShowError.bind(this);
  }

  setShowError(newStatus) {
    this.setState({
      showError: newStatus,
    });
  }

  setInputClassName(value) {
    const errorInputClassName = "input input--error";
    const noErrorInputClassName = "input";

    const { submitted } = this.props;
    const { showError } = this.state;

    const isError = !value && (showError || submitted);
  
    if (isError) {
      return errorInputClassName;
    }
  
    return noErrorInputClassName;
  }  

  render() {
    const { input, details, onInputChanged } = this.props;
    const { name, label } = input;
    const value  = details[name];
    
    return (
      <div className={this.setInputClassName(value)}>
        <label htmlFor={name}>{label}</label>
        <span></span>
        <input type="text" name={name} id={name} onChange={({ target:{ value } }) => {
          onInputChanged(name, value);
          this.setShowError(true);
        }}></input>
      </div>
    );
  }
}