import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 20,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent:"center",
    alignItems:"center",
  }
});