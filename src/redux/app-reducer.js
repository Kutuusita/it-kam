import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialSatate = {
  initialized: false
};

const appReducer = (state = initialSatate, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
}

export const initializedsSuccess = () => ({'type': INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  // Promise.all([promise1, promise2, ... , promiseN]).then(...);
  Promise.all( [ dispatch(getAuthUserData()) ] )
    .then(() => {
      dispatch(initializedsSuccess());
    });
}

export default  appReducer;