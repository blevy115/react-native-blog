import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ( { navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return <BlogPostForm
    onSubmit={(title, content) => {
      editBlogPost(blogPost.id, title, content, () => {
        navigation.navigate('Index')
      })}}
    initialValues={{title:blogPost.title, content:blogPost.content}}
    labels={{title:'Edit',content:'Edit', submit:'Edit'}}
  />
};

export default EditScreen;
