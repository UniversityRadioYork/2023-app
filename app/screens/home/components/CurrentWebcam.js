import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';

import {images} from '../../../globals/constants/resources';
import {sizes} from '../../../globals/constants/style';

export default function CurrentWebcam() {
	const [currentImg, setCurrentImg] = React.useState(
		images.liveWebcam + Date.now(),
	);
	const [nextImg, setNextImg] = React.useState(images.liveWebcam + Date.now());
	let updateCurrent = true;

	React.useEffect(() => {
		const updateImage = () => {
			if (updateCurrent) {
				setCurrentImg(images.liveWebcam + Date.now());
			} else {
				setNextImg(images.liveWebcam + Date.now());
			}
		};

		updateImage();
		const updateInterval = setInterval(updateImage, 500);

		return () => {
			clearInterval(updateInterval);
		};
	}, []);

	return (
		<View style={styles.container}>
			<FastImage
				style={styles.camera}
				source={{
					uri: currentImg,
					headers: {Authorization: 'authToken'},
					priority: FastImage.priority.normal,
				}}
				resizeMode={FastImage.resizeMode.contain}
				onLoad={e => (updateCurrent = !updateCurrent)}
			/>
			<FastImage
				style={styles.camera}
				source={{
					uri: nextImg,
					headers: {Authorization: 'authToken'},
					priority: FastImage.priority.normal,
				}}
				resizeMode={FastImage.resizeMode.contain}
				onLoad={e => (updateCurrent = !updateCurrent)}
			/>
		</View>
	);
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
