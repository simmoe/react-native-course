import React, {useState} from 'react'
import Header from './components/Header'
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import GameOverScreen from './screens/GameOverScreen'
import Gamescreen from './screens/Gamescreen'

//Apploading prolongs the app loading screen until a certain task is done (here async loading fonts)
import { AppLoading } from 'expo'
import * as Font from 'expo-font' 

const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
  }
  
  export default function App() {
    const [userNumber, setUsernumber] = useState()
    const [gameOver, setGameOver] = useState(false)
    const [dataLoaded, setDataLoaded] = useState(false);
  
    if (!dataLoaded) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setDataLoaded(true)}
          onError={ err => console.log(err)}
        />
      );
    }

    const onStartGame = (selectedNumber) => {
        setUsernumber(selectedNumber)
    }

    const reset = () => {
        setUsernumber()
        setGameOver(false)
    }

    //App logic
    let currentScreen = <StartGameScreen onStartGame={onStartGame} />
    if(!isNaN(userNumber)) currentScreen = <Gamescreen setGameOver={setGameOver} userNumber={userNumber}/>
    if(gameOver) currentScreen = <GameOverScreen userNumber={userNumber} reset={reset}/>

    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <View style={styles.container}>
            <Header title='Guess a number'/>
            {currentScreen}
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
