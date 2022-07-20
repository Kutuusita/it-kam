import Profile from './Profile';
import { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from './../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../hoc/withRouter';


const ProfileContainer = props => {

  useEffect(() => {
    let userId = props.profileId || props.loggedUserId;
    props.getProfile(userId);
    props.getStatus(userId);
  }, []);

  if (props.isFatching) return <Preloader />;
  return <Profile {...props} />;
};

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  isFatching: state.profilePage.isFatching,
  loggedUserId: state.auth.id,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);