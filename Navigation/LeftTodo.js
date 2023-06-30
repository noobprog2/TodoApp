import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import TodoItem from '../Components/TodoItem';

export default function LeftTodo({ route }) {
  const { leftTasks, updateTodos } = route.params;

  const leftHandler = (key) => {
    const newTodos = leftTasks.filter((todo) => todo.key !== key);
    updateTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.item}>LEFT-TODOS</Text>
        <Text style={styles.text2}>TASKS PENDING</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={leftTasks}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={leftHandler} />
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
