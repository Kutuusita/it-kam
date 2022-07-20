import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialSatate = {
  userProfile: {},
  posts: [
    {id: 1, message: 'It\'s my first post!', likesCount: 0},
    {id: 2, message: 'Hi, how are you?', likesCount: 23},
  ],
  newPostText: '',
  isFetching: true,
  status: ''
};

const profileReducer = (state = initialSatate, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 2,  message: action.message, likesCount: 0 }
        ],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: {...action.userProfile},
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }

}

export default profileReducer;

// Action Creators
export const addPostCreater = (message) => ({ 'type': ADD_POST, message });

export const setUserProfile = (userProfile) =>
                ({type: SET_USER_PROFILE, userProfile});
export const toggleIsFetching = (isFetching) => ({'type': TOGGLE_IS_FETCHING, isFetching });
export const setUserStatus = (status) =>
                ({type: SET_USER_STATUS, status});


// Thunk Creators
export const getProfile = (userId) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  profileAPI.getProfile(userId)
          .then( resp => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(resp));
          });
}
export const getStatus = (userId) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  profileAPI.getStatus(userId)
          .then( resp => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserStatus(resp));
          });
}
export const updateStatus = (status) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  profileAPI.updateStatus(status)
          .then( resp => {
            dispatch(toggleIsFetching(false));
            if (resp.resultCode === 0) {
              dispatch(setUserStatus(status));
            }
          });
}