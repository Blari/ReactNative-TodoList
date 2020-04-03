import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
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
       setTodo(prevState => prevState.filter(todo => todo.id !== id))
   };

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
       content = <TodoScreen goBack={ () => setTodoId(null) } todo={selectedTodo}/>
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
