import { useReducer } from 'react';
import { useCallback } from 'react';

const stateReducer = (state, action) => {
  if (action.type === 'SEND') {
    return {
      status: 'Pending',
      Error: null,
      data: null,
    };
  }
  if (action.type === 'SUCCESS') {
    return {
      status: 'Completed',
      Error: null,
      data: action.responseData,
    };
  }
  if (action.type === 'ERROR') {
    return {
      status: 'Completed',
      Error: action.message,
      data: null,
    };
  }
  return state;
};

const useHttps = (requestFunc, startingwithPending = false) => {
  const [httpState, dispatch] = useReducer(stateReducer, {
    status: startingwithPending ? 'pending' : null,
    Error: null,
    data: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunc(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          message: error.message || 'Something Went Wrong',
        });
      }
    },
    [requestFunc]
  );
  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttps;
