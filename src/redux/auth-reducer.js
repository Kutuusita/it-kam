
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
      return { ...state, ...action.data, isAuth: true};

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
}

export default  userDataReducer;

export const setAuthUserData = (id, email, login) => ({'type': SET_USER_DATA, data: {id, email, login} });
export const toggleIsFetching = (isFetching) => ({'type': TOGGLE_IS_FETCHING, isFetching });