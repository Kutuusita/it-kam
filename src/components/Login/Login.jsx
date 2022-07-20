import s from './Login.module.css';


import { Field, reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";
import { Input, SummaryError } from "../common/FormsControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login, logout } from '../../redux/auth-reducer';

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.login__formControl}>
        <Field component={Input} type="text" name="email" autoComplete="username" placeholder="Email" validate={[required, maxLength30]}
        />
      </div>
      <div className={s.login__formControl}>
        <Field component={Input} type="password" name="password" autoComplete="current-password" placeholder="Password" validate={[required, maxLength30]}
        />
      </div>
      <div className={s.login__formControl}>
        <Field component={Input} type="checkbox" name="remember" /> remember me
      </div>
      {
        props.error && <SummaryError error={props.error}/>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    const {email, password, rememberMe} = formData;
    props.login(email, password, rememberMe)
  }

  if (props.isAuth) return <Navigate replace to="/profile" />
  return (
    <div className='app-block'>
      <h1>
        Login
      </h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login, logout })(Login);