import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ( { navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return <BlogPostForm
    onSubmit={(title, content) => {
      editBlogPost(id, title, content, () => {
        navigation.pop()
      })
    }}
    initialValues={{title:blogPost.title, content:blogPost.content}}
    labels={{title:'Edit',content:'Edit', submit:'Edit'}}
  />
};

export default EditScreen;
