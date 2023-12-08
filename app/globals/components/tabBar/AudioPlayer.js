import * as React from 'react';
import {Pressable, Image, View, StyleSheet} from 'react-native';

import SoundPlayer from 'react-native-sound-player';

import {sizes} from '../../constants/style';
import audio from '../../constants/resources';

const playImage = require('../../../assets/mediacontrol/play.png');
const stopImage = require('../../../assets/mediacontrol/stop.png');

export default class AudioPlayer extends React.Component {
	constructor() {
		super();
		this.state = {
			buttonImage: playImage,
		};
		this.toggleSound = this.toggleSound.bind(this);
		this.currentlyPlaying = false;
	}

	componentDidMount() {}

	componentWillUnmount() {}

	toggleSound() {
		if (this.currentlyPlaying) {
			SoundPlayer.stop();
			this.setState({buttonImage: playImage});
			this.currentlyPlaying = false;
		} else {
			SoundPlayer.playUrl(audio.playback);
			this.setState({buttonImage: stopImage});
			this.currentlyPlaying = true;
		}
	}

	render() {
		return (
			<View>
				<Pressable onPress={() => this.toggleSound()}>
					<Image source={this.state.buttonImage} style={styles.audioPlayer} />
				</Pressable>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	audioPlayer: {
		height: sizes.tabBarIcon,
		width: sizes.tabBarIcon,
	},
});
