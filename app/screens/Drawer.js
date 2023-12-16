import * as React from 'react';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	useDrawerProgress,
} from '@react-navigation/drawer';

import HomeScreen from './home/Home.js';
import ScheduleScreen from './schedule/Schedule';
import ShowScreen from './show/Show';
import {Linking} from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
	const progress = useDrawerProgress();

	return (
		<DrawerContentScrollView {...props}>
			<DrawerItem
				label="Home"
				onPress={() => props.navigation.navigate('Home')}
			/>
			<DrawerItem
				label="Schedule"
				onPress={() => props.navigation.navigate('Schedule')}
			/>
			<DrawerItem
				label="Mixcloud"
				onPress={() => Linking.openURL('https://www.mixcloud.com/URY1350/')}
			/>
		</DrawerContentScrollView>
	);
}

export default function GlobalDrawer() {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: true,
				gestureEnabled: true,
				swipeEnabled: true,
				drawerType: 'slide',
				swipeEdgeWidth: 300,
				swipeMinDistance: 50,
			}}
			drawerContent={props => <CustomDrawerContent {...props} />}>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Schedule" component={ScheduleScreen} />
			<Drawer.Screen name="Show" component={ShowScreen} />
		</Drawer.Navigator>
	);
}
