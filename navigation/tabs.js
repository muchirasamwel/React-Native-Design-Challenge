import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from '../screens/home'
import Settings from '../screens/settings'
import { List } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Tab = createBottomTabNavigator()

const TabBarCustom = ({ accessibilityState, children, onPress }) => {
  let active = accessibilityState.selected
  if (active) {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: 'brown',
          height: 60
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={{
          ustifyContent: 'center',
          alignContent: 'center',
          backgroundColor: 'white',
          height: 60
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    )
  }
}

export default function Tabs () {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            let colorName = focused ? 'tomato' : 'gray'
            if (route.name === 'Home') {
              iconName = focused ? 'home-variant' : 'home-variant-outline'
            } else if (route.name === 'About') {
              iconName = focused ? 'information' : 'information-outline'
            } else if (route.name === 'Contact') {
              iconName = focused ? 'phone' : 'phone-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cogs' : 'cogs'
            }

            return <List.Icon color={colorName} icon={iconName} />
          }
          // tabBarButton: props => <TabBarCustom {...props} />
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: { height: 60, paddingBottom: 10 }
        }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='About' component={Home} />
        <Tab.Screen name='Contact' component={Home} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    </SafeAreaProvider>
  )
}
