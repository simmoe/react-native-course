import React, {useState} from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/colors'
import StyleConstants from '../constants/default-styles'
import {View, Text, StyleSheet, Button, Keyboard, Alert, Image} from 'react-native'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState()
    const [selectedNumber, setSelectedNumber] = useState()
    const [confirmed, setConfirmed] = useState(false)
    
    const numberInputHandler = enteredText => {
        setEnteredValue(enteredText.replace(/[^0-9]/g, ''))
    }
    
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        //So we are REALLY thorough here

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Not valid input myfriend',
                'Number must be between 1 and 99',
                [{text:'okay', style:'destructive', onPress:resetInputHandler }]
            )
            return
        }
        Keyboard.dismiss()
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false) 
    }
    
    let confirmedOutput
    if(confirmed) confirmedOutput = 
        <Card style={ styles.summaryContainer }>
            <Text>Chosen number: {selectedNumber}</Text>
            <Button title='Start game' onPress={ () => props.onStartGame(selectedNumber)}/>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri:'https://facebook.github.io/react/logo-og.png'}} 
                    style={{height:'100%', width:'100%'}}
                    resizeMode='cover'
                />
            </View>
        </Card>

    return(
        <View style={styles.screen}>
            <Card>
                <Text style={styles.title}>Type a number</Text>
                <Input 
                    value={enteredValue}
                    onChangeText={numberInputHandler}
                    style={styles.input}  
                    keyboardType='number-pad' 
                    maxLength={2} 
                    blurOnSubmit 
                    />
                <View style={StyleConstants.buttonContainer}>
                    <View style={styles.button}>
                        <Button color={Colors.primary} title='confirm' onPress={ confirmInputHandler }/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={ resetInputHandler } color={Colors.accent} title='reset'/>
                    </View>
                </View>
                <View>
                    {confirmedOutput}
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding:10,
        alignItems:'center',
        paddingVertical:50,
    },
    imageContainer:{
        width:100,
        height:100,
        borderRadius:50,
        overflow:'hidden',
        marginVertical:12
    },
    input:{
        width:40,
    },
    title:{
        fontSize:30,
        marginVertical:20,
    },
    button:{
        minWidth:100,
    },
    summaryContainer: {
        alignItems:'center',
        justifyContent:'center',
    },  
    image:{
        width:'80%'
    }
})

export default StartGameScreen
