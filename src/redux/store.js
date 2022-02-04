import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
const store = {

  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'It\'s my first post!', likesCount: 0},
        {id: 2, message: 'Hi, how are you?', likesCount: 23},
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Svetlana'},
        {id: 5, name: 'Irina'},
        {id: 6, name: 'Viktoria'},
        {id: 7, name: 'Aleksandr'},
      ],
      messages: [
        {id: 1, message: 'Hi', authorId: 1, date: '08 января 13:30'},
        {id: 2, message: 'How are you', authorId: 0, date: '08 января 13:32'},
        {id: 3, message: 'Fine', authorId: 1, date: '08 января 13:34'},
        {id: 4, message: 'By!', authorId: 0, date: '08 января 13:40'},
      ],
      newMessageText: '',
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Andrey'},
      ]
    }
  },
  _callSabscriber() {
    console.log('State has changed');
  },

  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._callSabscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSabscriber(this._state);
  }

}


export default store;
window.store = store;
// store - OOP