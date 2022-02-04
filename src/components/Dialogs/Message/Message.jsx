import s from './../Dialogs.module.css';

const Message = ({state}) => {
  let className = state.authorId ? `${s.message}` : `${s.message} ${s.self}`;
  return <div className={className} ><span className={s.text}>{state.message}</span><span className={s.date}>{state.date}</span></div>
}

export default Message;