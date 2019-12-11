import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView
} from 'react-native'

export default function App() {
    const [text,
        setText] = useState('')
    const [checklist,
        setChecklist] = useState([])
    const addItem = () => {
        console.log(text)
        setChecklist(checklist => [
            ...checklist,
            text
        ])
        //setText('')
    }
    return (
        <View style={styles.container}>
            <View style={styles.new}>
                <TextInput
                    placeholder='give me a check item'
                    value={text}
                    onChangeText={(txt) => setText(txt)}
                    style={styles.textinput}/>
                <Button title='add new item' onPress={addItem}/>
            </View>
            <ScrollView>
                <View style={styles.items}>
                    {checklist.map((item, key) => <Text key={key}>{item}</Text>)
}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    new: {
        height:'30%',
        justifyContent: 'center',
        width: '100%',
        padding: 24
    },
    items: {
        paddingTop: 24,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textinput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#aaa',
        marginBottom: 12,
        padding: 12
    }
})
