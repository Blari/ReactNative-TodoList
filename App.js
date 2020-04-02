import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {ToDo} from "./src/Todo";

export default function App() {
  const [todos, setTodo] = useState([]);

   const addTodo = title => {
      setTodo(prevState => [...prevState, {
          id: Date.now().toString(),
          title
      }])
   };

   const removeTodo = id => {
       setTodo(prevState => prevState.filter(todo => todo.id !== id))
   }
    return (
    <View>
      <Navbar title="ToDo App" />
      <View style={styles.container}>
          <AddTodo onSubmit={addTodo} />

          <FlatList
              data={todos}
              renderItem={({ item }) => <ToDo todo={item} onRemove={removeTodo} />}
              keyExtractor={item => item.id.toString()}
          />
      </View>

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
      margin: 10
  }
});
