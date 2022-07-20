import { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from './../../redux/auth-reducer';


class HeaderContainer extends Component {

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

export default connect(mapStateToProps, { logout })(HeaderContainer);