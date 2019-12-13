import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

export default function InputItem (props) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.deleteItem(props.id) } style={styles.item}>
            <View>
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        item: {
            minHeight:44,
            minWidth:'90%',
            flex:1,
            backgroundColor:'#fed766',
            padding:12,
            marginBottom:12,
        }
    }
)