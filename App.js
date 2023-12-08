/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {Button, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './app/screens/home/Home';
import ScheduleScreen from './app/screens/schedule/Schedule';
import TabBar from './app/globals/components/tabBar/TabBar';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: true,
					gestureEnabled: true,
					swipeEnabled: true,
					drawerType: 'slide',
					swipeEdgeWidth: 300,
					swipeMinDistance: 50,
				}}>
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Schedule" component={ScheduleScreen} />
			</Drawer.Navigator>
			<TabBar />
		</NavigationContainer>
	);
}
