import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AudioPlayer from './AudioPlayer';

export default class TabBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<View style={styles.tabbar}>
				<Text>Currently Playing: </Text>
				<AudioPlayer />
			</View>
		);
	}
}

let styles = StyleSheet.create({
	tabbar: {
		backgroundColor: '#002a92',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
