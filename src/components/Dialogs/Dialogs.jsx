import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let {dialogs, messages} = props.dialogsPage;

  let dialogsElements = dialogs.map( ({name, id}) => <DialogItem name={name} key={id} id={id}/> );
  let messagesElements = messages.map( el => <Message state={el} key={el.id}/> );

  let newMessageElement = React.createRef();

  const onAddMessage = () => {
    props.sendMessage();
  }

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.uppdateNewMessageText(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }

      </div>
      <div className={s.messages}>
        { messagesElements }
        <div className={s.addMessage}>
            <textarea
                placeholder='Edd new message...'
                ref={newMessageElement}
                value={ props.newMessageText }
                onChange={onMessageChange} ></textarea>
            <button onClick={ onAddMessage }>Add message</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;