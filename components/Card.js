import React from 'react'

import {View, StyleSheet} from 'react-native'

const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems:'center',
        width:300,
        maxWidth:'80%',
        shadowColor:'black',
        shadowOffset: { width:0, height:2 },
        shadowRadius: 6,
        shadowOpacity: .26,
        elevation:8,
        backgroundColor: 'white',
        padding:24,
        borderRadius:8
    }
})

export default Card