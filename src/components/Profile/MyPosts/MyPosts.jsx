import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
  return (
    <form className={s.addPost} onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name='message'
               placeholder='add new post...'
               validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
};

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm);

const MyPosts = (props) => {

  const onSubmit = (formData) => {
    props.addPost(formData.message);
  }

  return (
    <div className={s.allPosts}>
      <h3>
        My Posts
      </h3>
      <AddPostReduxForm onSubmit={onSubmit}/>
      <div className={s.posts}>
        {
          props.posts.map( ({message, id, likesCount}) => <Post message={message} key={id} id={id} likesCount={likesCount}/> )
        }
      </div>
    </div>
  )
}

export default MyPosts;