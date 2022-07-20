const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialSatate = {
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
};

const dialogsReducer = (state = initialSatate, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 2,
            message: action.message,
            authorId: 0,
            date: '08 января 13:30'
          }
        ],
      };
    default:
      return state;
  }
}

export default  dialogsReducer;

export const sendMessageCreater = (message) => ({'type': SEND_MESSAGE, message });