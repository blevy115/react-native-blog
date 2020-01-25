import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues, labels}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const { input, label } = styles;

  return (
    <View>
      <Text style={label}>{labels.title} Title:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={input}
      />
      <Text style={label}>{labels.content} Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={input}
      />
      <Button title={`${labels.submit} Blog Post`} onPress={() => { onSubmit(title, content)}}/>
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues:{
    title:'',
    content:''
  }
}

const styles = StyleSheet.create({
  input:{
    fontSize:18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label:{
    fontSize:20,
    marginBottom:5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
