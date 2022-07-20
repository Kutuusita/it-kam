import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialSatate = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true
};

const userDataReducer = (state = initialSatate, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload};


    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
}

export default  userDataReducer;

export const setAuthUserData = (id, email, login, isAuth) => ({'type': SET_USER_DATA, payload: {id, email, login, isAuth} });
export const toggleIsFetching = (isFetching) => ({'type': TOGGLE_IS_FETCHING, isFetching });

export const getAuthUserData = () => (dispatch) => {
  return authAPI.auth().then(resp => {
    if (resp.resultCode === 0) {
      const {id, email, login } = resp.data
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
}

export const login = (email, password, rememberMe) => ( dispatch ) => {

  authAPI.login(email, password, rememberMe)
         .then(resp => {
          if (resp.resultCode === 0) {
            dispatch(getAuthUserData());
          } else {
            let message = resp.messages.length > 0 ? resp.messages[0] : 'Some Error';
            dispatch(stopSubmit('login', {_error: message}))
          }
         })
}
export const logout = () => ( dispatch ) => {
  authAPI.logout()
         .then(resp => {
          if (resp.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
          }
         })
}