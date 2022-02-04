import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from './../../redux/users-reducer';

import { Component } from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
      axios(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(resp.data.items);
        this.props.setTotalUsersCount(resp.data.totalCount);
      });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(resp => {
      this.props.toggleIsFetching(false);
        this.props.setUsers(resp.data.items);
      });
  }

  render() {
    return <>
          { this.props.isFetching ? <Preloader />: null}
          <Users
              users={this.props.users}
              currentPage={this.props.currentPage}
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              isFetching={this.props.isFetching}
              unfollow={this.props.unfollow}
              follow={this.props.follow}
              onPageChanged={this.onPageChanged} />
    </>
  }
}

const mapStateToProps = ({ usersPage: { users, pageSize, totalUsersCount, currentPage, isFetching }, }) => {
  return {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching
  }
}

export default connect( mapStateToProps,
                      { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, } )(UsersContainer);