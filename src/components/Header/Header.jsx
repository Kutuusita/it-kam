import logo from './../../logo.svg';
import logout from './../../logout.svg';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="Logo" className={s.logo}/>
      <div className={s.siteTitle}>...The way of the Samurai</div>
      <div className={s.loginBlock}>
        {
          props.isAuth
            ? <div className={s.profile}><span>{props.login}</span> <button title="Log Out" onClick={props.logout}><img src={logout} alt="logout" /></button></div>
            : <NavLink to={'/login'} >LOGIN</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;