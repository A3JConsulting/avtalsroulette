import { combineReducers } from 'redux';
import {
  SET_CONTRACTOR,
  REQUEST_CONTRACT,
  RECEIVE_CONTRACT,
  SET_SIGNATURE_DATA_URL,
  ACTIVATE_FINGERPRINT,
  RECEIVE_AGREEMENT,
} from '../actions';

const contractor = (state = null, action) => {
  switch (action.type) {
    case SET_CONTRACTOR:
      return action.contractor;

    default:
      return state;
  }
};

const contract = (state = {isFetching: false, contract: null}, action) => {
  switch (action.type) {
    case REQUEST_CONTRACT:
      return {
        isFetching: true,
        data: null
      };

    case RECEIVE_CONTRACT:
      return {
        isFetching: false,
        data: action.contract
      };

    default:
      return state;
  }
};

const signature = (state = null, action) => {
  switch (action.type) {
    case SET_SIGNATURE_DATA_URL:
      return action.dataURL;

    default:
      return state;
  }
};

const fingerprint = (state = {active: false}, action) => {
  switch (action.type) {
    case ACTIVATE_FINGERPRINT:
      return action;

    default:
      return state;
  }
};

const agreement = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_AGREEMENT:
      return agreement;

    default:
      return state;
  }
};

const avtalsrouletteApp = combineReducers({
  contractor,
  contract,
  signature,
  fingerprint,
  agreement
});

export default avtalsrouletteApp;
