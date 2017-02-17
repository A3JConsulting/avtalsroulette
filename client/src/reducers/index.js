import { combineReducers } from 'redux';
import { SET_CONTRACTOR, HIDE_SPLASH, REQUEST_CONTRACT, RECEIVE_CONTRACT } from '../actions';

const contractor = (state = null, action) => {
  switch (action.type) {
    case SET_CONTRACTOR:
      return action.contractor;

    default:
      return state;
  }
}

const splash = (state = 'visible', action) => {
  switch (action.type) {
    case HIDE_SPLASH:
      return 'hidden';

    default:
      return state;
  }
}

const contract = (state = {isFetching: false, contract: null}, action) => {
  switch (action.type) {
    case REQUEST_CONTRACT:
      return Object.assign({}, state, {
        isFetching: true,
        contract: null
      });

    case RECEIVE_CONTRACT:
      return Object.assign({}, state, {
        isFetching: false,
        contract: action.contract
      });

    default:
      return state;
  }
}
const avtalsrouletteApp = combineReducers({
  splash,
  contractor,
  contract
});

export default avtalsrouletteApp;
