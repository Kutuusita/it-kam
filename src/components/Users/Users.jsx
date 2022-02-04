import { NavLink } from 'react-router-dom';
import s from './Users.module.css';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <div className={s.users}>
      <div className={s.header}>
        <h1 className={s.title}>Users</h1>
        <div className={s.pagination}>
          { pages.map(p => {
            let classes = '';
            if (p > 5 && p < pagesCount - 5 && p !== props.currentPage) {
              classes = s.hidden;
            }
            if (props.currentPage === p) {
              classes = s.selectedPage;
            }
            return (
              <button
                  key={p}
                  id={p}
                  className={classes}
                  onClick={() => props.onPageChanged(p) }>{ p }</button>
            );
          })}
        </div>
      </div>
    {
      props.users.map(u => {
        return <div key={u.id} className={s.item}>
          <div className={s.avatar}>
            <span className={s.image}>
              <NavLink to={`/profile/${u.id}`}>
                { u.photos.small ? <img src={u.photos.small} alt={u.name}/> : '^_^' }
              </NavLink>

            </span>
            { u.followed
                ? <button className={s.followed} onClick={() => props.unfollow(u.id)}>Follow</button>
                : <button className={s.followed} onClick={() => props.follow(u.id)} >Unfollow</button> }
          </div>

          <div className={s.info}>
            <div className={s.name}>
              <span>{u.name}</span>
              <span>{"u.location.country"}, <br />{"u.location.city"}</span>
            </div>
            <div className={s.status}>{u.status ? u.status : 'u.status'}</div>
          </div>
        </div>
      } )
    }

    <button className={s.showMore}>Show More</button>
  </div>
}

export default Users;