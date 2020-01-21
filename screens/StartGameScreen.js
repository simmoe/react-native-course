import React, {useState} from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/colors'
import {View, Text, StyleSheet, Button, Keyboard, Alert} from 'react-native'

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
    if(confirmed) confirmedOutput = <Text>Chosen number: {selectedNumber}</Text>

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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color={Colors.primary} title='confirm' onPress={ confirmInputHandler }/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={ resetInputHandler } color={Colors.accent} title='reset'/>
                    </View>
                </View>
                {confirmedOutput}
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
    input:{
        width:40,
    },
    title:{
        fontSize:30,
        marginVertical:20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-evenly',
        marginVertical:20,
    },
    button:{
        minWidth:100,
    }
})

export default StartGameScreen
