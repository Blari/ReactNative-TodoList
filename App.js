import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/Screens/MainScreen";
import {TodoScreen} from "./src/Screens/TodoScreen";

export default function App() {

    const [todoId, setTodoId] = useState(null);
    const [todos, setTodo] = useState([
        { id: '1', title: 'Выучить React Native' },
        { id: '2', title: 'Написать приложение' }
    ]);

    const addTodo = title => {
      setTodo(prevState => [...prevState, {
          id: Date.now().toString(),
          title
      }])
   };

    const removeTodo = id => {
        const todo = todos.find(t => t.id === id);
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${todo.title}"?`,
            [
                {text: 'Отмена', style: 'cancel'},
                {text: 'Удалить',
                    style: "destructive",
                    onPress: () => {
                        setTodoId(null);
                        setTodo(prevState => prevState.filter(todo => todo.id !== id))
                    }
                },
            ],
            { cancelable: false }
        )
   };

    const updateTodo = (id, title) => {
        setTodo(old => old.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo
        }))
    }

   let content = (
       <MainScreen
           todos={todos}
           addTodo={addTodo}
           removeTodo={removeTodo}
           openTodo={setTodoId}
        />
   );

   if (todoId) {
       const selectedTodo = todos.find(todo => todo.id === todoId)
       content = <TodoScreen
           onRemove={removeTodo}
           goBack={ () => setTodoId(null) }
           todo={selectedTodo}
           onSave={updateTodo}
       />
   }

    return (
        <View>
          <Navbar title="ToDo App" />
          <View style={styles.container}>
              { content }
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      margin: 10
  }
});
