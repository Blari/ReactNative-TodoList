import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import {THEME} from "../them";
import {AppCard} from "../components/UI/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {

const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
            <AppCard style={style.card}>
                <Text style={style.title}>{todo.title}</Text>
                <Button title="Ред." onPress={() => setModal(true)}/>
            </AppCard>
            <View style={style.buttonBlock}>
                <View style={style.button}>
                    <Button title="Back" color={THEME.GRAY_COLOR} onPress={goBack}/>
                </View>
                <View style={style.button}>
                    <Button title="Delete" color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}/>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    buttonBlock:{
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: "40%"
    },
    title: {
        fontSize: 20
    }
});