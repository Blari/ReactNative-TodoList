import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Modal, Button, Alert} from 'react-native';
import {THEME} from "../them";

export const EditModal = ({ visible, onCancel, value, onSave }) => {

    const [title, setTitle] = useState(value);
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка', `Минимальная длинна названия 3 символа. Сейчас ${title.trim().length}.`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent={false}
        >
            <View style={style.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={style.input}
                    placeholder='Введите название'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLight={255}
                />
                <View style={style.buttons}>
                    <Button title="Отменить" onPress={() => onCancel()} color={THEME.DANGER_COLOR}/>
                    <Button title="Сохранить" onPress={() => saveHandler()}/>
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        flexDirection:'row',
        marginTop: 10,
        justifyContent: 'space-around'
    }
})