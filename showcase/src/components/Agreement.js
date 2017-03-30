import React from 'react';
import '../styles/Agreement.css';

const Agreement = ({ name, signature, summary, sponsor_logo }) => {
  return (
    <div className="Agreement">
      <div className="Agreement__signature" style={{backgroundImage: `url(${signature})`}} />
      <p className="Agreement__text">
        {sponsor_logo ? <img className="Agreement__sponsor-logo" src={sponsor_logo} /> : null}
        {name} har förbundit sig att {summary}</p>
    </div>
  );
};

export default Agreement;
