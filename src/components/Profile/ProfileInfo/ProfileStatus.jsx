import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
  const [status, setStatus] = useState(props.status || '');
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  }

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={s.status}>
      {
        !editMode
        ? <div className={s.statusText}><span onClick={activateEditMode}>
          {props.status || <span style={{'color': '#999999', 'fontSize': '13px'}}>добавить статус</span>}
          </span></div>
        : <div><input className={s.statusInput} type="text" autoFocus={true}
                      value={status} onBlur={deactivateEditMode}
                      onChange={onChangeStatus}/></div>
      }
    </div>
  )
}

export default ProfileStatus;