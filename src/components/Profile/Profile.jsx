import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.userProfile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;