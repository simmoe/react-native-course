import React from 'react'
import Header from './components/Header'
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <View style={styles.container}>
            <Header title='Guess a number'/>
            <StartGameScreen />
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#eee',
        justifyContent:'flex-start',
        alignItems:'center',
    },
})
