import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../Components/Header';
import AddTodo from '../Components/AddTodo';
import TodoItem from '../Components/TodoItem';
import { useNavigation } from '@react-navigation/native';

export default function TodoList() {
  const navigation = useNavigation();

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [leftTasks, setLeftTasks] = useState([]);

  useEffect(() => {
    navigation.navigate('ToDoCompleted', {
      completedTasks: completedTasks,
      updateTodos: updateTodos,
    });
    navigation.navigate('LeftTodo', {
      leftTasks: leftTasks,
      updateTodos: updateTodos,
    });
  }, [completedTasks, leftTasks]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      const selectedTodo = prevTodos.find((todo) => todo.key === key);
      const filteredTodos = prevTodos.filter((todo) => todo.key !== key);
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, selectedTodo]);
      setLeftTasks(filteredTodos);
      return filteredTodos;
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  const updateTodos = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
