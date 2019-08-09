import React from 'react';
import ReactDom from 'react-dom';
import PizzaCreator from './components/PizzaCreator';

ReactDom.render(
  <PizzaCreator />,
  document.querySelector('#root'),
);