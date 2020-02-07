import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import Card from '../components/Card'
import StyleConstants from '../constants/default-styles'

const generateRandomBetween = (min, max) => {
    //Returns the smallest integer greater than or equal to its numeric argument.
    min = Math.ceil(min) + 1 
    //Returns the greatest integer less than or equal to its numeric argument.
    max = Math.floor(max) - 1
    //Math.random Returns a pseudorandom number between 0 and 1.
    //So we want to recieve a random number 
    const random = Math.floor( Math.random() * (max - min) ) + min 
    return random
}

const Gamescreen = props => {

    const [currentGuess, setCurrentGuess] = useState( generateRandomBetween(1, 100) )
    
    //useRefs will be stored detatched from the component and react will RECOGNISE if they have been initialized!! 
    currentLow = useRef(1)
    currentHigh = useRef(100)

    const nextGuessHandler = direction => {
        //handle the situation where the user erraneously indicates a wrong direction
        if( (
            direction === 'down' && currentGuess < props.userNumber) 
            || 
            ( direction === 'up' && currentGuess > props.userNumber) 
            )
            {
                //handle wrong indications
                Alert.alert('Ahh, Sam...', 'That\'s not entirely correct now man...', [{text:'aight', style:'cancel'}])
                return
            }
        if(direction === 'down') {
            currentHigh.current = currentGuess
        }else{
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current)
        setCurrentGuess(nextNumber)
    }

    useEffect( ()=> {
        if(currentGuess===props.userNumber){props.setGameOver(true)}
    })

    return(
        <View style={styles.screen}>
                <Text style={{padding:20,}}>Computers guess:</Text>
                <Card>
                    <Text style={StyleConstants.fontSizeMax}>{currentGuess}</Text>
                </Card>
                <Text style={{padding:20,}}>Is that too high or too low for you?</Text>
                <Card style={styles.card}>
                    <View style={StyleConstants.buttonContainer}>
                        <Button title='guess lower' onPress={ nextGuessHandler.bind(this, 'down') }/>
                        <Button title='guess higher' onPress = { nextGuessHandler.bind(this, 'up') }/>
                    </View>
                </Card>           
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:10,
        alignItems:'center',
    },
    card: {
        justifyContent:'center',
        marginTop:20
    }
})

export default Gamescreen