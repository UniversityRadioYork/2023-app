import TrackPlayer, {
	AppKilledPlaybackBehavior,
	Capability,
	getPlaybackState,
	State,
	Event,
	useTrackPlayerEvents,
} from 'react-native-track-player';
import {View} from 'react-native';
import {audio} from '../constants/resources';
import {stop} from 'react-native-track-player/lib/trackPlayer';

const events = [Event.RemotePlay, Event.RemotePause];

const liveAudio = {
	title: 'URY',
	artist: 'university radio york',
	url: audio.playback,
	isLiveStream: true,
};

const trackPlayerOptions = {
	stopWithApp: true,
	android: {
		appKilledPlaybackBehavior:
			AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
	},
	capabilities: [Capability.Play, Capability.Pause],
	compactCapabilities: [Capability.Play, Capability.Pause],
	progressUpdateEventInterval: 2,
};

export async function setupPlayer() {
	await TrackPlayer.setupPlayer();
	await TrackPlayer.updateOptions(trackPlayerOptions);
}

async function playLive() {
	await TrackPlayer.stop();
	await TrackPlayer.updateOptions(trackPlayerOptions);
	await TrackPlayer.setQueue([liveAudio]);
	await TrackPlayer.play();
}

async function stopPlayback() {
	await TrackPlayer.pause();
}

export async function toggleLiveAudio() {
	let playState = await TrackPlayer.getPlaybackState();
	if (playState['state'] != 'playing') {
		playLive();
	} else {
		stopPlayback();
	}
}

export function NotificationListener() {
	useTrackPlayerEvents(events, event => {
		if (event.type === Event.RemotePause || event.type == Event.RemotePlay) {
			toggleLiveAudio();
		}
	});

	return <View></View>;
}
