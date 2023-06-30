import React from 'react'
import {StyleSheet, TouchableOpacity, Text,View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default function TodoItem({ pressHandler, item }) {
  return (
    
      <View style={styles.item}>

 <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <MaterialIcons name="check-box" size={22} color="#333"  />

      </TouchableOpacity>
      
      <Text style={styles.itemtext}>{item.text}</Text>
      </View>
    
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection:"row",
    
  },
  itemtext:{
    marginLeft:15,
    fontWeight:"bold",
  }
});