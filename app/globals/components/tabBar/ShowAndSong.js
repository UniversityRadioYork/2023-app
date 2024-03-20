import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import myRadioGetRequest from '../../../requests/myRadioRequest';
import {sizes, colours, fonts} from '../../constants/style';
import {names} from '../../constants/resources';

export default function ShowAndSong() {
	const [currentShow, setCurrentShow] = React.useState(names.offAirShow);
	const [currentSong, setCurrentSong] = React.useState('');

	React.useEffect(() => {
		const updateText = () => {
			myRadioGetRequest('timeslot/currenttimeslot')
				.then(response => {
					if (response['payload']) {
						setCurrentShow(response['payload']['title']);
					} else {
						setCurrentShow(names.offAirShow);
					}
				})
				.catch(error => {});
			myRadioGetRequest('track/nowplaying')
				.then(response => {
					if (response['payload']) {
						setCurrentSong(
							response['payload']['track']['title'] +
								' - ' +
								response['payload']['track']['artist'],
						);
					} else {
						setCurrentSong('');
					}
				})
				.catch(error => {});
		};

		updateText();
		const updateInterval = setInterval(updateText, 5000);

		return () => {
			clearInterval(updateInterval);
		};
	}, []);

	return (
		<View style={styles.sizeLimit}>
			<Text style={styles.currentShow} numberOfLines={1} ellipsizeMode="tail">
				{currentShow}
			</Text>
			<Text style={styles.currentSong} numberOfLines={1} ellipsizeMode="tail">
				{currentSong}
			</Text>
		</View>
	);
}

let styles = StyleSheet.create({
	currentShow: {
		fontSize: sizes.text,
		fontFamily: fonts.titleFont,
		color: colours.white,
		textAlign: 'left',
	},
	currentSong: {
		fontSize: sizes.smalltext,
		fontFamily: fonts.subTitleFont,
		color: colours.white,
		textAlign: 'left',
	},
	sizeLimit: {
		width: sizes.tabBarText,
	},
});
