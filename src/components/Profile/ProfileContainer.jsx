import Profile from './Profile';
import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile, toggleIsFetching } from './../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { useParams } from 'react-router-dom';


const withRouter = (WrappedComponent) => (props) => {
  let {profileId} = useParams();
  // debugger;
  return (
    <WrappedComponent
    {...props}
    profileId={profileId}/>
  )
}

class ProfileContainer extends Component {
  componentDidMount() {

    this.props.toggleIsFetching(true);
    let userId = this.props.profileId || 2;

    axios(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(resp => {
      this.props.toggleIsFetching(false);
      this.props.setUserProfile(resp.data);
    });
  }
  render() {
    if (this.props.isFatching) return <Preloader />
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = ({profilePage: { userProfile, isFatching }}) => ({
  userProfile,
  isFatching,
});



export default connect(mapStateToProps, { setUserProfile, toggleIsFetching })(withRouter(ProfileContainer))