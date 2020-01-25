import React, { useContext, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ( { navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(Context);
  const { input, label } = styles;

  return (
    <View>
      <Text style={label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={input}
      />
      <Text style={label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={input}
      />
      <Button title="Add Blog Post" onPress={() => {
        addBlogPost(title, content, () => {
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

export default CreateScreen;
