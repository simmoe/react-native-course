import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const strings = ["Der sad to katte på et bord", "Kvittevittevitt bom bom", "Så sa' den ene hør min ven", "Sku vi ikke kravle ned igen", "Kvittevittevit bom bom"]
  const [next, setNext] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.standard}>{strings[next]}</Text>
      <Button style={styles.button} onPress={() => setNext(next < strings.length - 1 ? next + 1 : 0)} title='next line, please' />
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
  button:{
    borderRadius: 12,
  },  
})
