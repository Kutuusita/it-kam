import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://sun9-57.userapi.com/impg/TuQ_NHqMO9zyIhqoNAig2dGOU7m_l6sWhYTptw/pujp_-xt5HU.jpg?size=604x604&quality=96&sign=537cc26f0dd49b2b97efceabc34ea0fc&type=album" alt="" />
      { props.message }
      <span>Like {props.likesCount}</span>
    </div>
  )
}

export default Post;