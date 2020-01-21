import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}>{props.children}</TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'gray', 
        borderBottomWidth: StyleSheet.hairlineWidth,
        height:40,
        paddingVertical:10,   
        textAlign:'center',     
    }
})

export default Input