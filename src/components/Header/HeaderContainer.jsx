import { Component } from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData, toggleIsFetching } from './../../redux/auth-reducer';


class HeaderContainer extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(resp => {
      if (resp.data.resultCode === 0) {
        const {id, email, login } = resp.data.data
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return (
     <Header {...this.props} />
    )
  }
}

const mapStateToProps = ({auth: { isAuth, login }}) => ({
  isAuth,
  login
})

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);