import React from 'react';
import svg from '../roulette-wheel.svg';
import '../styles/Spinner.css';

let Spinner = () => (
  <div className="Spinner">
    <img className="Spinner__wheel" src={svg} alt="Generating contract..." />
  </div>
);

export default Spinner;
