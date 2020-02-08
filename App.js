import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator'

//this will eventually combine the differerent reducers
const rootReducer = combineReducers({
  products:productsReducer
})

//one store to rule them all
const store = createStore(rootReducer)

export default function App() {
  return(
    // Setup the Provider with the global store 
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  }
})
