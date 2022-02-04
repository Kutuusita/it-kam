import Dialogs from './Dialogs';
import { sendMessageCreater, updateNewMessageTextCreater } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    uppdateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreater(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreater());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;