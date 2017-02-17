export const SET_CONTRACTOR = 'SET_CONTRACTOR';
export const HIDE_SPLASH = 'HIDE_SPLASH';
export const REQUEST_CONTRACT = 'REQUEST_CONTRACT';
export const RECEIVE_CONTRACT = 'RECEIVE_CONTRACT';

export const hideSplash = () => {
  return {
    type: HIDE_SPLASH
  };
};

export const setContractor = (contractor) => {
  return {
    type: SET_CONTRACTOR,
    contractor
  };
};

export const requestContract = () => {
  return {
    type: REQUEST_CONTRACT
  };
}

export const receiveContract = (contract) => {
  return {
    type: RECEIVE_CONTRACT,
    contract
  };
}

export const fetchContract = () => {
  return function (dispatch) {
    dispatch(requestContract());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(receiveContract({foo: 'bar'}));
        resolve();
      }, 5000);
    });
  };
};
