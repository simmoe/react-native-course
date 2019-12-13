import React, {useState} from 'react';
import {StyleSheet, Button, View, ScrollView} from 'react-native'
import InputItem from './components/InputItem';
import ChecklistItem from './components/ChecklistItem';

export default function App() {
    const [checklist,
        setChecklist] = useState([])

    const [isAddMode, setIsAddMode] = useState(false)
    
    const addItem = string => {
        setChecklist(checklist => [
            ...checklist,
            string
        ])
        setIsAddMode(false)
    }

    const deleteItem = id => {
        setChecklist(checklist.filter( (item, index) => index!== id ) )
    }

    return (
        <View style={styles.container}>
            <Button onPress={ () => setIsAddMode(true) } title='Add item' style={styles.btn} />
            <InputItem setIsAddMode={setIsAddMode} visible={isAddMode} addItem={addItem} />
            <ScrollView>
                <View style={styles.items}>
                    {checklist.map((item, key) => 
                        <ChecklistItem deleteItem={deleteItem} id={key} key={key} item={item} />)}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:44,
        justifyContent:'center',
        alignItems:'center',
    },
    items: {
        paddingTop: 24,
        justifyContent: 'flex-start',
        flex:1,
        alignItems: 'center'
    },
    btn:{
        flex:1,
    },
})
