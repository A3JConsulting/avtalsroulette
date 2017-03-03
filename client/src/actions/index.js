export const SET_CONTRACTOR = 'SET_CONTRACTOR';
export const REQUEST_CONTRACT = 'REQUEST_CONTRACT';
export const RECEIVE_CONTRACT = 'RECEIVE_CONTRACT';
export const SET_SIGNATURE_DATA_URL = 'SET_SIGNATURE_DATA_URL';
export const ACTIVATE_FINGERPRINT = 'ACTIVATE_FINGERPRINT';

export const setContractor = (contractor) => {
  return {
    type: SET_CONTRACTOR,
    contractor
  };
};

const requestContract = () => {
  return {
    type: REQUEST_CONTRACT
  };
}

const receiveContract = (contract) => {
  return {
    type: RECEIVE_CONTRACT,
    contract
  };
}

export const fetchContract = () => {
  return (dispatch) => {
    dispatch(requestContract());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(receiveContract({
          name: 'Test contract',
          content: require('./contract.txt')
        }));
        resolve();
      }, 1);
    });
  };
};

const setSignature = (dataURL) => {
  return {
    type: SET_SIGNATURE_DATA_URL,
    dataURL
  };
};

export const signContract = (dataURL) => {
  return (dispatch, getState) => {
    const { contract, contractor } = getState();
    dispatch(setSignature(dataURL));
    return new Promise((resolve, reject) => {
      console.log(`${contractor.name} signed contract ${contract.data.name} using signature ${dataURL}`);
      resolve();
    });
  };
};

export const activateFingerprint = (active) => {
  return {
    type: ACTIVATE_FINGERPRINT,
    active
  }
};
