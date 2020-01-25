import React, { useContext, useState } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ( { navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  return <BlogPostForm
    onSubmit={() => {
      editBlogPost(blogPost.id, title, content, () => {
        navigation.navigate('Index')
      })}}
    values={{title, setTitle, content, setContent}}
    labels={{title:'Edit',content:'Edit', submit:'Edit'}}
  />
}

export default EditScreen
