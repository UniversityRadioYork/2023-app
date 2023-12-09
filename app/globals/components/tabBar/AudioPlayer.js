import * as React from 'react';
import {Pressable, Image, View, StyleSheet} from 'react-native';

import TrackPlayer, {
	AppKilledPlaybackBehavior,
	Capability,
	RepeatMode,
	Event,
} from 'react-native-track-player';

import {sizes} from '../../constants/style';
import {audio} from '../../constants/resources';

const playImage = require('../../../assets/mediacontrol/play.png');
const stopImage = require('../../../assets/mediacontrol/stop.png');

const audioplay = {
	title: 'URY',
	artist: 'university radio york',
	url: audio.playback,
};

async function setupTrackPlayer() {
	await TrackPlayer.setupPlayer();

	TrackPlayer.updateOptions({
		android: {
			appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
		},
	});
}

async function playLive() {
	await TrackPlayer.setQueue([audioplay]);
	await TrackPlayer.play();
}

async function stopPlayback() {
	await TrackPlayer.stop();
}

export default class AudioPlayer extends React.Component {
	constructor() {
		super();
		this.state = {
			buttonImage: playImage,
		};
		this.toggleSound = this.toggleSound.bind(this);
		this.currentlyPlaying = false;
	}

	componentDidMount() {
		setupTrackPlayer();
	}

	componentWillUnmount() {}

	toggleSound() {
		if (this.currentlyPlaying) {
			stopPlayback();
			this.setState({buttonImage: playImage});
			this.currentlyPlaying = false;
		} else {
			playLive();
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
