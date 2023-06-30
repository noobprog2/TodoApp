import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import TodoItem from '../Components/TodoItem';

export default function ToDoCompleted({ route }) {
  const { completedTasks, updateTodos } = route.params;

  const completeHandler = (key) => {
    const newTodos = completedTasks.filter((todo) => todo.key !== key);
    updateTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.item}>TODOS-COMPLETED</Text>
        <Text style={styles.text2}>Completed tasks from TodoList appear here</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={completedTasks}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={completeHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'coral',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 30,
    color: 'yellow',
  },
  text2: {
    textTransform: 'capitalize',
    color: '#fff',
    fontSize: 18,
    padding: 3,
  },
});
