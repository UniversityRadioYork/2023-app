import React, {Component, useState, useRef, useEffect} from 'react';
import {Pressable, Image, View, StyleSheet, Text} from 'react-native';

import TrackPlayer, {
	useTrackPlayerEvents,
	Event,
} from 'react-native-track-player';

import {toggleLiveAudio} from '../../audioPlayer/audioPlayer';

import {sizes} from '../../constants/style';

const playImage = require('../../../assets/mediacontrol/play.png');
const stopImage = require('../../../assets/mediacontrol/stop.png');

const events = [Event.PlaybackState];

export default function AudioPlayerButton() {
	const [playerButtonImage, setPlayerButtonImage] = useState(playImage);

	useTrackPlayerEvents(events, event => {
		if (event.type === Event.PlaybackState) {
			if (event.state == 'playing') {
				setPlayerButtonImage(stopImage);
			} else {
				setPlayerButtonImage(playImage);
			}
		}
	});

	return (
		<View>
			<Pressable onPress={() => toggleLiveAudio()}>
				<Image source={playerButtonImage} style={styles.audioPlayer} />
			</Pressable>
		</View>
	);
}

let styles = StyleSheet.create({
	audioPlayer: {
		height: sizes.tabBarIcon,
		width: sizes.tabBarIcon,
	},
});
