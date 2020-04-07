import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native'
import {AddTodo} from "../components/AddTodo";
import {ToDo} from "../components/Todo";

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    let content = (
        <FlatList
            data={todos}
            renderItem={({ item }) =>
                <ToDo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
            }
            keyExtractor={item => item.id.toString()}
        />
    )

    if (todos.length === 0) {
        content =
            <View style={style.imgWrap}>
                <Image
                    style={style.image}
                    source={require('../../assets/no-results.png')}
                />
            </View>
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />

            {content}
        </View>
    )
}

const style = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})