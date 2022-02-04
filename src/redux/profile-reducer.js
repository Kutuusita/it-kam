const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialSatate = {
  userProfile: {},
  posts: [
    {id: 1, message: 'It\'s my first post!', likesCount: 0},
    {id: 2, message: 'Hi, how are you?', likesCount: 23},
  ],
  newPostText: '',
  isFetching: true
};

const profileReducer = (state = initialSatate, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 2,  message: state.newPostText, likesCount: 0 }
        ],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: {...action.userProfile},
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }

}

export default profileReducer;

export const addPostCreater = () => ({ 'type': ADD_POST });
export const updateNewPostTextCreater = (newText) =>
                ({type: UPDATE_NEW_POST_TEXT, newText});
export const setUserProfile = (userProfile) =>
                ({type: SET_USER_PROFILE, userProfile});
export const toggleIsFetching = (isFetching) => ({'type': TOGGLE_IS_FETCHING, isFetching });