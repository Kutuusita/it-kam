import { NavLink, Link } from 'react-router-dom';
import s from './Navbar.module.css';
import { connect } from 'react-redux';

const Navbar = (props) => {
  let friends = props.friends.map(({name, id}) => <Link to={`dialogs/${id}`} key={id} className={s.friend}>{name}</Link>);
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? s.activeLink : undefined }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.activeLink : undefined }>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={({ isActive }) => isActive ? s.activeLink : undefined }>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={({ isActive }) => isActive ? s.activeLink : undefined }>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={({ isActive }) => isActive ? s.activeLink : undefined }>Find Users</NavLink>
      </div>
      <div className={`${s.item} ${s.bottomLink}`}>
        <NavLink to="/settings" className={({ isActive }) => isActive ? s.activeLink : undefined }>Settings</NavLink>
      </div>
      <div className={s.friends}>
        { friends }
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  }
}
export default connect(mapStateToProps)(Navbar);