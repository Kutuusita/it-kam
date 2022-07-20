import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import sidebarReducer from './sidebar-reducer';
import userDataReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

let reducers = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: userDataReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;