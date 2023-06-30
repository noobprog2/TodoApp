import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabRoute from './Navigation/TabRoute'

export default function App() {
  return (
    <NavigationContainer>
      <TabRoute/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})