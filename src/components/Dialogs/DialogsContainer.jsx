import Dialogs from './Dialogs';
import { sendMessageCreater } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessageCreater(message));
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);