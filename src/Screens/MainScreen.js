import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native'
import {AddTodo} from "../components/AddTodo";
import {ToDo} from "../components/Todo";

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />

            <FlatList
                data={todos}
                renderItem={({ item }) =>
                    <ToDo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const style = StyleSheet.create({

})