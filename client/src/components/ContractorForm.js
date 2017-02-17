import React from 'react';
import { connect } from 'react-redux';
import { setContractor, fetchContract } from '../actions';

let ContractorForm = ({ dispatch }) => {
  let name;
  let email;

  return (
    <form
      className="contractor-form"
      onSubmit={e => {
        e.preventDefault();
        if (!name.value.trim()) {
          return;
        }
        if (!email.value.trim()) {
          return;
        }
        dispatch(setContractor({
          name,
          email
        }));
        dispatch(fetchContract());
      }}
    >
      <input type="text" ref={node => { name = node; }} placeholder="Ditt för- och efternamn" />
      <input type="email" ref={node => { email = node; }} placeholder="Din e-postadress" />
      <button type="submit">Spin the wheel</button>
    </form>
  );
};

ContractorForm = connect()(ContractorForm);

export default ContractorForm;
