/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/home/Home';
import ScheduleScreen from './app/screens/schedule/Schedule';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            title: 'URY',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTintColor: '#002a92',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Schedule" component={ScheduleScreen}
                  options={{
            title: 'Schedule',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTintColor: '#002a92',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
