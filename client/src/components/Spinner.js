import React from 'react';
import svg from '../roulette-wheel.svg';

let Spinner = () => (
  <div className="spinner">
    <img src={svg} alt="Generating contract..." />
  </div>
);

export default Spinner;
