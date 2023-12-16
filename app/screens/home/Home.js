import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {sizes, colours, fonts} from '../../globals/constants/style';
import CurrentWebcam from './components/CurrentWebcam';
import CurrentAndNext from './components/CurrentAndNext';
import MessageBox from './components/MessageBox';

export default function HomeScreen() {
	return (
		<View style={styles.page}>
			<Text style={styles.titles}>URY</Text>
			<CurrentWebcam />
			<MessageBox />
			<CurrentAndNext />
			<View></View>
		</View>
	);
}

let styles = StyleSheet.create({
	page: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colours.darkerblue,
		justifyContent: 'space-between',
	},
	titles: {
		fontSize: sizes.h1,
		color: colours.white,
		fontFamily: fonts.titleFont,
	},
});
