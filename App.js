import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/Screens/MainScreen";
import {TodoScreen} from "./src/Screens/TodoScreen";

export default function App() {

    const [todoId, setTodoId] = useState(null);
    const [todos, setTodo] = useState([]);

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
        />
   );

   if (todoId) {
    content = <TodoScreen/>
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
