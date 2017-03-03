import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import ContractorStep from './../containers/ContractorStep';
import ContractStep from './../containers/ContractStep';
import Spinner from './Spinner';
import '../styles/App.css';

let App = ({ showSplash, showContractorStep, showSpinner, showContractStep }) => (
  <div className="App">
    <ReactCSSTransitionGroup
      transitionName="step"
      transitionEnterTimeout={150}
      transitionLeaveTimeout={150}
      component="div"
    >
      {showContractorStep ? <ContractorStep /> : null}
      {showSpinner ? <Spinner /> : null}
      {showContractStep ? <ContractStep /> : null}
    </ReactCSSTransitionGroup>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    showContractorStep: state.contractor === null,
    showSpinner: state.contract.isFetching,
    showContractStep: !state.contract.isFetching && !!state.contract.data
  };
};

App = connect(mapStateToProps)(App);

export default App;
