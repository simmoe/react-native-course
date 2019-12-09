import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState("Open up App.js to start working on your app!")
  return (
    <View style={styles.container}>
      <Text style={styles.standard}>{text}</Text>
      <Button onPress={() => setText('yeah well you thought so')} title='change text' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  standard:{
    marginVertical:10,
    color:'white',
    fontSize:24,
    padding:12,
  },
})
