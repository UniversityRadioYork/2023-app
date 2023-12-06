import * as React from 'react';
import {View, Text} from 'react-native';

import CurrentWebcam from './components/CurrentWebcam';

export default function ScheduleScreen() {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Webcame Screen</Text>
			<CurrentWebcam />
		</View>
	);
}
