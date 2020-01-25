import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ( { navigation }) => {
  const { addBlogPost } = useContext(Context);

  return <BlogPostForm
    onSubmit={(title, content) => {
      addBlogPost(title, content, () => {
        navigation.navigate('Index')
      })
    }}
    labels={{title:'Enter',content:'Enter', submit:'Add'}}
  />
};

export default CreateScreen;
