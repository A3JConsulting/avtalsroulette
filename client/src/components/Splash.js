import React from 'react';
import { connect } from 'react-redux';
import { hideSplash } from '../actions';
import '../styles/Splash.css';

let Splash = ({ dispatch }) => (
  <div className="Splash">
    <a href="#" className="Splash__link" onClick={e => { e.preventDefault(); dispatch(hideSplash()); }}>Spin the wheel</a>
  </div>
);

Splash = connect()(Splash);

export default Splash;
