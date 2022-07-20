import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, requestUsers, follow, unfollow } from './../../redux/users-reducer';

import { Component } from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getTotalUsersCount, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getUsers } from '../../redux/users-selectors';

class UsersContainer extends Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
          { this.props.isFetching ? <Preloader />: null}
          <Users
              users={this.props.users}
              currentPage={this.props.currentPage}
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              onPageChanged={this.onPageChanged}
              followingInProgress={this.props.followingInProgress}
              follow={this.props.follow}
              unfollow={this.props.unfollow} />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect( mapStateToProps, { followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, requestUsers, follow, unfollow } )
)(UsersContainer);