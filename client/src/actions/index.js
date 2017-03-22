export const SET_CONTRACTOR = 'SET_CONTRACTOR';
export const REQUEST_CONTRACT = 'REQUEST_CONTRACT';
export const RECEIVE_CONTRACT = 'RECEIVE_CONTRACT';
export const SET_SIGNATURE_DATA_URL = 'SET_SIGNATURE_DATA_URL';
export const ACTIVATE_FINGERPRINT = 'ACTIVATE_FINGERPRINT';
export const RECEIVE_AGREEMENT = 'RECEIVE_AGREEMENT';

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
      fetch(process.env.REACT_APP_API_BASEURL + '/contracts/random')
        .then(res => res.json())
        .then(contract => {
          dispatch(receiveContract(contract));
        });
      /*
      setTimeout(() => {
        dispatch(receiveContract({
          name: 'Test contract',
          content: require('./contract.txt')
        }));
        resolve();
      }, 1);
      */
    });
  };
};

const setSignature = (dataURL) => {
  return {
    type: SET_SIGNATURE_DATA_URL,
    dataURL
  };
};

const receiveAgreement = (agreement) => {
  return {
    type: RECEIVE_AGREEMENT,
    agreement
  }
};

export const signContract = (dataURL) => {
  return (dispatch, getState) => {
    const { contract, contractor } = getState();
    dispatch(setSignature(dataURL));
    return new Promise((resolve, reject) => {
      const body = JSON.stringify({
        name: contractor.name,
        email: "placeholder@email.tld",
        contract_id: contract.data.id,
        signature: dataURL
      });
      const postConf = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      };
      fetch(process.env.REACT_APP_API_BASEURL + '/agreements', postConf)
        .then(res => res.json())
        .then(agreement => {
          dispatch(receiveAgreement(agreement));
          resolve();
        }).catch(err => {
          console.error(err);
          reject();
        });
    });
  };
};

export const activateFingerprint = (active) => {
  return {
    type: ACTIVATE_FINGERPRINT,
    active
  }
};
