import React from 'react';
import '../styles/Agreement.css';

const Agreement = ({ name, signature, summary }) => {
  return (
    <div className="Agreement">
      <div className="Agreement__signature" style={{backgroundImage: `url(${signature})`}} />
      <p className="Agreement__text">{name} har förbundit sig att {summary}</p>
    </div>
  );
};

export default Agreement;
