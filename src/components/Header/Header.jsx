import logo from './../../logo.svg';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="Logo" />
      <div className={s.siteTitle}>...The way of the Samurai</div>
      <div className={s.loginBlock}>
        {
          props.isAuth ? props.login
            : <NavLink to={'/login'} >LOGIN</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;