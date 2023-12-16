import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';

import {images} from '../../../globals/constants/resources';
import {sizes} from '../../../globals/constants/style';

export default class CurrentWebcam extends React.Component {
	constructor() {
		super();
		this.state = {
			currentimg: images.liveWebcam + Date.now(),
			nextimg: images.liveWebcam + Date.now(),
		};
		this.updateCurrent = true;
		this.updateImage = this.updateImage.bind(this);
	}

	componentDidMount() {
		updateInterval = setInterval(this.updateImage, 500);
	}

	componentWillUnmount() {
		// use intervalId from the state to clear the interval
		clearInterval(updateInterval);
	}

	updateImage() {
		if (this.updateCurrent) {
			this.setState({
				currentimg: images.liveWebcam + Date.now(),
			});
		} else {
			this.setState({
				nextimg: images.liveWebcam + Date.now(),
			});
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<FastImage
					style={styles.camera}
					source={{
						uri: this.state.currentimg,
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					}}
					resizeMode={FastImage.resizeMode.contain}
					onLoad={e => (this.updateCurrent = !this.updateCurrent)}
				/>
				<FastImage
					style={styles.camera}
					source={{
						uri: this.state.nextimg,
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					}}
					resizeMode={FastImage.resizeMode.contain}
					onLoad={e => (this.updateCurrent = !this.updateCurrent)}
				/>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	camera: {
		height: sizes.camHeight,
		width: sizes.camWidth,
		position: 'absolute',
	},
	container: {
		height: sizes.camHeight,
		width: sizes.camWidth,
	},
});
