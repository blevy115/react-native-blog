import React from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({onSubmit, values, labels}) => {
  const { input, label } = styles;

  return (
    <View>
      <Text style={label}>{labels.title} Title:</Text>
      <TextInput
        value={values.title}
        onChangeText={values.setTitle}
        style={input}
      />
      <Text style={label}>{labels.content} Content:</Text>
      <TextInput
        value={values.content}
        onChangeText={values.setContent}
        style={input}
      />
      <Button title={`${labels.submit} Blog Post`} onPress={() => onSubmit()}/>
    </View>
  )
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
