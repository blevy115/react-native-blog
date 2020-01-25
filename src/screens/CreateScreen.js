import React, { useContext, useState } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ( { navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return <BlogPostForm
    onSubmit={() => {
      addBlogPost(title, content, () => {
        navigation.navigate('Index')
      })}}
    values={{title, setTitle, content, setContent}}
    labels={{title:'Enter',content:'Enter', submit:'Add'}}
  />
}

export default CreateScreen;
