import renderPizzaCreator from './javascritps/renderPizzaCreator';
import './index.css';

const root = document.querySelector('.root');

const pizzaCreator = renderPizzaCreator();

root.append(pizzaCreator);