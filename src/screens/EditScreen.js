import React, { useContext, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';


const EditScreen = ( { navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  const { input, label } = styles;

  return (
    <View>
      <Text style={label}>Edit Title:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={input}
      />
      <Text style={label}>Edit Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={input}
      />
      <Button title="Edit Blog Post" onPress={() => {
        editBlogPost(blogPost.id, title, content, () => {
          navigation.navigate('Index')
        })
      }}/>
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

export default EditScreen
