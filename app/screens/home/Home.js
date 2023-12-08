import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import {sizes, colours} from '../../globals/constants/style';
import CurrentWebcam from './components/CurrentWebcam';

export default function HomeScreen({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'left'}}>
			<CurrentWebcam />
		</View>
	);
}

let styles = StyleSheet.create({
	text: {
		color: colours.black,
		textAlign: 'center',
		fontSize: sizes.text,
		fontWeight: 'bold',
	},
});
