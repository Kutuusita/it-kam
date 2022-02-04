import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

const ProfileInfo = ({profile}) => {
  if (Object.keys(profile).length === 0 && profile.constructor === Object) {
    return <Preloader />
  }
  return (
    <>

      <div>
        <img src={profile.photos?.large ? profile.photos.large: "https://oir.mobi/uploads/posts/2020-01/thumbs/1579663385_20-p-fioletovie-tumannosti-28.jpg"} alt="" width="100%" height="200px"/>
      </div>

      <div className={s.info}>
        <img src={profile.photos?.small ? profile.photos.small: "https://funnymodo.com/wp-content/uploads/2016/09/1473236924_maxresdefault.jpg"} alt="ava" width="200px" height="200px" />
        <div className={s.description}>
          <h2>{profile.fullName}</h2>
          <p>{profile.aboutMe}</p>
          <p><strong>Contacts:</strong></p>
          <ul>
            {
              Object.entries(profile.contacts).map(([key, val]) => {
                return val ? <li>{`${key}: ${val}`}</li>: ''
              })
            }
          </ul>
        </div>
      </div>

    </>
  )
}

export default ProfileInfo;