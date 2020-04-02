import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddTodo = ( { onSubmit } ) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
           Alert.alert('Введите название')
        }
    }

    return (
        <View style = {styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                autoCorrect={false}
                autoCopitalize='none'
                placeholder="Введите задачу"
            />
            <Button title="Добавить" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab',
        padding: 5
    }
})