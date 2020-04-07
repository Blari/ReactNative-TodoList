import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from "./UI/AppText";

export const ToDo = ({todo, onRemove, onOpen}) => {

    return (
        <TouchableOpacity
            onLongPress={() => onRemove(todo.id)}
            onPress={() => onOpen(todo.id)}
        >
            <View style={style.todo}>
                <AppText>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 8
    }
})