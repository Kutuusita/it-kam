import MyPosts from './MyPosts';
import { addPostCreater, updateNewPostTextCreater } from './../../../redux/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreater(text)
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostCreater());
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;