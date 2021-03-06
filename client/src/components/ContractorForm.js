import React from 'react';
import '../styles/ContractorForm.css';

let ContractorForm = ({ onSubmit, headline, namePlaceholder, submitText }) => {
  let name;

  return (
    <div className="ContractorForm">
      <p className="ContractorForm__paragraph">{headline}</p>
      <form
        className="ContractorForm__form"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(name.value);
        }}
      >
        <input className="ContractorForm__input" type="text" ref={node => { name = node; }} placeholder={namePlaceholder} required />
        <button className="ContractorForm__button" type="submit">{submitText}</button>
      </form>
    </div>
  );
};

ContractorForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  headline: React.PropTypes.string,
  submitText: React.PropTypes.string,
  namePlaceholer: React.PropTypes.string
};

ContractorForm.defaultProps = {
  headline: "Snurra avtalsrouletten",
  namePlaceholder: "Ditt för- och efternamn",
  submitText: "Spin the wheel"
};

export default ContractorForm;
