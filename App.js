import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Settings from './screens/settings'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='About' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
