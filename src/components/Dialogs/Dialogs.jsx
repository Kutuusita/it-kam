import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormControls';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form className={s.addMessage} onSubmit={props.handleSubmit}>
      <div className={s.textarea}>
        <Field
            name='message'
            component={Textarea}
            placeholder='Add new message...'
            validate={[required, maxLength100]}/>
      </div>
      <button>Add message</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessage'})(AddMessageForm);

const Dialogs = (props) => {
  let {dialogs, messages} = props.dialogsPage;

  let dialogsElements = dialogs.map( ({name, id}) => <DialogItem name={name} key={id} id={id}/> );
  let messagesElements = messages.map( el => <Message state={el} key={el.id}/> );


  const onSubmit = (formData) => {
    props.sendMessage(formData.message);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        <AddMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}
export default Dialogs;