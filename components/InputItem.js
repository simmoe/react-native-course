import React, {useState} from 'react'
import {StyleSheet, View, Button, TextInput, Modal} from 'react-native'

export default function InputItem(props) {
    const [text,
        setText] = useState('')
    const addItem = () => {
        props.addItem(text)
        setText('')
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.new}>
                <TextInput
                    placeholder='give me a check item'
                    value={text}
                    onChangeText={(txt) => setText(txt)}
                    style={styles.textinput}/>
                <View style={styles.buttonContainer}>
                    <Button title='add item' onPress={addItem}/>
                    <Button title='cancel' color='red' onPress={() => props.setIsAddMode(false)}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    new: {
        flex: 1,
        justifyContent: 'center',
        padding: 24
    },
    textinput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#aaa',
        marginBottom: 12,
        padding: 12
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%',
    }
})
