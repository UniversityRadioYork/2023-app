import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AudioPlayerButton from './AudioPlayerButton';
import ShowAndSong from './ShowAndSong';
import CurrentShowArt from './CurrentShowArt';

export default class TabBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<View style={styles.tabbar}>
				<View style={styles.showinfo}>
					<CurrentShowArt />
					<View style={styles.showAndSong}>
						<ShowAndSong />
					</View>
				</View>
				<AudioPlayerButton />
			</View>
		);
	}
}

let styles = StyleSheet.create({
	tabbar: {
		backgroundColor: '#002a92',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	showinfo: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	showAndSong: {padding: 10},
});
