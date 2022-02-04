import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };
  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.allPosts}>
      <h3>
        My Posts
      </h3>
      <div className={s.addPost}>
        <div>
          <textarea placeholder="add new post..."
                    onChange={ onPostChange }
                    ref={newPostElement}
                    value={ props.newPostText }></textarea>
        </div>
        <div>
          <button onClick={ onAddPost } >Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {
          props.posts.map( ({message, id, likesCount}) => <Post message={message} key={id} id={id} likesCount={likesCount}/> )
        }
      </div>
    </div>
  )
}

export default MyPosts;