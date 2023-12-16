/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from './app/globals/components/tabBar/TabBar';
import {
	setupPlayer,
	NotificationListener,
} from './app/globals/audioPlayer/audioPlayer';
import GlobalDrawer from './app/screens/Drawer';

export default function App() {
	setupPlayer();
	return (
		<NavigationContainer>
			<GlobalDrawer />
			<TabBar />
			<NotificationListener />
		</NavigationContainer>
	);
}
