import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from 'react-native-navigation';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Mystack from './navigation/index.js';


const App = () => {
  return (
      <NavigationContainer>
        <Mystack/>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})