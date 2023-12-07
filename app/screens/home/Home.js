import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import {sizes, colours} from '../../globals/constants/style';

export default function HomeScreen({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text style={styles.text}>
				Welcome to the ury app, an app where you can really just fuck about
			</Text>
			<Button
				title="Go to Schedule"
				onPress={() => navigation.navigate('Schedule')}
			/>
		</View>
	);
}

let styles = StyleSheet.create({
	text: {
		color: colours.black,
		textAlign: 'center',
		fontSize: sizes.p,
		fontWeight: 'bold',
	},
});
