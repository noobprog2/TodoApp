import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.text1}>TODO-APP</Text>
        <View style={styles.icons}>
          <MaterialIcons name="playlist-add" size={50} color="yellow" />
        </View>
      </View>
      <View style={styles.view1}>
      <Text style={styles.text2}>A simple todo app to trace and execute daily activities</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    textAlign: 'center',
    color: 'yellow',
    fontSize: 40,
    fontWeight: 'bold',
    
  },
  view1:{
    margin:30,
    padding:15,
    

  },
  text2: {
    
    marginHorizontal:10,
    textTransform: 'capitalize',
    fontSize: 24,
    color: '#fff',
  },
  icons: {
    padding:10,
  },
});
