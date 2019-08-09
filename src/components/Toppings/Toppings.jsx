import React from 'react';
import Title from '../Title';
import Topping from '../Topping';
import anchovyImg from '../../assets/toppings/anchovy.svg';
import baconImg from '../../assets/toppings/bacon.svg';
import basilImg from '../../assets/toppings/basil.svg';
import chiliImg from '../../assets/toppings/chili.svg';
import mozzarellaImg from '../../assets/toppings/mozzarella.svg';
import mushroomImg from '../../assets/toppings/mushroom.svg';
import oliveImg from '../../assets/toppings/olive.svg';
import onionImg from '../../assets/toppings/onion.svg';
import pepperImg from '../../assets/toppings/pepper.svg';
import pepperoniImg from '../../assets/toppings/pepperoni.svg';
import sweetcornImg from '../../assets/toppings/sweetcorn.svg';
import tomatoImg from '../../assets/toppings/tomato.svg';
import './Toppings.css';

export default function Toppings({ chosenToppings }) {
  const toppings = [
    {
      name: 'anchovy',
      price: '0.69',
      image: anchovyImg, 
    }, {
      name: 'bacon',
      price: '0.69',
      image: baconImg,
    }, {
      name: 'basil',
      price: '0.69',
      image: basilImg,
    }, {
      name: 'chili',
      price: '0.69',
      image: chiliImg,
    }, {
      name: 'mozzarella',
      price: '0.69',
      image: mozzarellaImg,
    }, {
      name: 'mushroom',
      price: '0.69',
      image: mushroomImg,
    }, {
      name: 'olive',
      price: '0.69',
      image: oliveImg,
    }, {
      name: 'onion',
      price: '0.69',
      image: onionImg,
    }, {
      name: 'pepper',
      price: '0.69',
      image: pepperImg,
    }, {
      name: 'pepperoni',
      price: '0.69',
      image: pepperoniImg,
    }, {
      name: 'sweetcorn',
      price: '0.69',
      image: sweetcornImg,
    }, {
      name: 'tomato',
      price: '0.69',
      image: tomatoImg,
    }
  ];

  return (
    <section>
      <Title>Choose Your Toppings</Title>
      <div className="toppings">
        {
          toppings.map((topping) => 
            <Topping 
              key={topping.name} 
              topping={topping} 
              chosenToppings={chosenToppings} 
            />)
        }
      </div>
    </section>
  );
}