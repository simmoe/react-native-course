import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import Card from '../components/Card'
import DefaultStyles from '../constants/default-styles'

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Card style={{marginTop:50}}>
                <Text style={DefaultStyles.fontSizeMax}>{props.userNumber}</Text>
            </Card>
            <Text style={{...DefaultStyles.fontSizeMed,...styles.text}}>Game is over mofo</Text>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    resizeMode='cover' 
                    source={require('../assets/petracalder.jpg')} />
            </View>
            <Card>
                <Button title='Play shit again' onPress={props.reset}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:5,
        alignItems:'center',
        width:'100%'
    },
    text:{
        padding:20,
    },
    imageContainer:{
        width:200,
        height:200,
        borderRadius:300,
        borderWidth:4,
        borderColor:'white',
        marginBottom:20,
        overflow:'hidden',
    },  
    image:{
        width:'100%',
        height:'100%',
    }
})

export default GameOverScreen