import React from 'react';
import { connect } from 'react-redux';
import Splash from './Splash';
import ContractorForm from './ContractorForm';
import ContractForm from './ContractForm';
import Spinner from './Spinner';

let App = ({ showSplash, showContractorForm, showSpinner, showContractForm }) => (
  <div className="app">
    {showSplash ? <Splash /> : null}
    {showContractorForm ? <ContractorForm /> : null}
    {showSpinner ? <Spinner /> : null}
    {showContractForm ? <ContractForm /> : null}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    showSplash: state.splash === 'visible',
    showContractorForm: state.splash !== 'visible' && state.contractor === null,
    showSpinner: state.contract.isFetching,
    showContractForm: !state.contract.isFetching && state.contract.contract
  };
};

App = connect(mapStateToProps)(App);

export default App;
