import * as React from 'react';
import {Pressable, Image, View} from 'react-native';

import SoundPlayer from 'react-native-sound-player';

const playImage = require('../../assets/mediacontrol/play.png');
const stopImage = require('../../assets/mediacontrol/stop.png');

export default class AudioPlayer extends React.Component {
	constructor() {
		super();
		this.state = {
			buttonImage: playImage,
		};
		this.toggleSound = this.toggleSound.bind(this);
		this.playing = false;
	}

	componentDidMount() {}

	componentWillUnmount() {}

	toggleSound() {
		if (this.playing) {
			SoundPlayer.stop();
			this.setState({buttonImage: playImage});
			this.playing = false;
		} else {
			SoundPlayer.playUrl('http://audio.ury.org.uk/live-mobile');
			this.setState({buttonImage: stopImage});
			this.playing = true;
		}
	}

	render() {
		return (
			<View>
				<Pressable onPress={() => this.toggleSound()}>
					<Image source={this.state.buttonImage} />
				</Pressable>
			</View>
		);
	}
}
