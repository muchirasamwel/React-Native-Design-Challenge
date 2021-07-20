import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Settings from './settings'
import { ScrollView } from 'react-native-gesture-handler'

export default function SettingsScreen () {
  const [renderedText, changeText] = useState('Hello World')
  return (
    <ScrollView style={styles.container}>
      {/* <Text>{renderedText}</Text>
      <Button title='Change Text' onPress={() => changeText('New Text')} /> */}

      <StatusBar style='auto' />
      <Settings />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ced0d0'
  }
})
