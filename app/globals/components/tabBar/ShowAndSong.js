import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import myRadioGetRequest from '../../../requests/myRadioRequest';
import {sizes, colours} from '../../constants/style';
import {names} from '../../constants/resources';

export default class ShowAndSong extends React.Component {
	constructor() {
		super();
		this.state = {
			currentShow: names.offAirShow,
			currentSong: '',
		};
		this.updateText = this.updateText.bind(this);
	}

	componentDidMount() {
		this.updateText();
		updateInterval = setInterval(this.updateText, 5000);
	}

	componentWillUnmount() {
		clearInterval(updateInterval);
	}

	updateText() {
		myRadioGetRequest('timeslot/currenttimeslot')
			.then(response => {
				if (response['payload']) {
					this.setState({
						currentShow: response['payload']['title'],
					});
				} else {
					this.setState({
						currentShow: names.offAirShow,
					});
				}
			})
			.catch(error => {});
		myRadioGetRequest('track/nowplaying')
			.then(response => {
				if (response['payload']) {
					this.setState({
						currentSong:
							response['payload']['track']['title'] +
							' - ' +
							response['payload']['track']['artist'],
					});
				} else {
					this.setState({
						currentSong: '',
					});
				}
			})
			.catch(error => {});
	}

	render() {
		return (
			<View>
				<Text style={styles.currentShow} numberOfLines={1} ellipsizeMode="tail">
					{this.state.currentShow}
				</Text>
				<Text style={styles.currentSong} numberOfLines={1} ellipsizeMode="tail">
					{this.state.currentSong}
				</Text>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	currentShow: {
		fontSize: sizes.text,
		fontWeight: 'bold',
		color: colours.white,
		textAlign: 'left',
	},
	currentSong: {
		fontSize: sizes.smalltext,
		color: colours.white,
		textAlign: 'left',
	},
});
