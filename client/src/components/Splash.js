import React from 'react';
import { connect } from 'react-redux';
import { hideSplash } from '../actions';

let Splash = ({ dispatch }) => (
  <div className="splash">
    <button onClick={e => { dispatch(hideSplash()); }}>Spin the wheel</button>
  </div>
);

Splash = connect()(Splash);

export default Splash;
