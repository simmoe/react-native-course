import React from 'react'
import Colors from '../constants/colors'
import {StyleSheet, Text, View} from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        height:120,
        width:'100%',
        backgroundColor: Colors.primary,
        justifyContent:'center',
        alignItems:'center',
    },
    item: {
        fontSize:18,
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
})
