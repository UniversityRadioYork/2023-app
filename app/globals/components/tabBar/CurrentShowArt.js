import React, {Component, useState, useRef, useEffect} from 'react';
import {View} from 'react-native';

import FastImage from 'react-native-fast-image';

import myRadioGetRequest from '../../../requests/myRadioRequest';
import {sizes} from '../../constants/style';
import {web} from '../../constants/resources';

let updateInterval;

const CurrentShowArt = () => {
	const [currentImg, setCurrentImg] = useState(
		require('../../../assets/imagedefaults/jukebox.png'),
	);

	const updateImage = () => {
		myRadioGetRequest('timeslot/currenttimeslot')
			.then(response => {
				setCurrentImg({
					uri: web.mainSite + response['payload']['photo'],
					headers: {Authorization: 'authToken'},
					priority: FastImage.priority.normal,
				});
			})
			.catch(error => {});
	};

	useEffect(() => {
		updateImage();
		updateInterval = setInterval(updateImage, 5000);

		return () => {
			clearInterval(updateInterval);
		};
	}, []);

	return (
		<View>
			<FastImage
				style={{width: sizes.tabBarIcon, height: sizes.tabBarIcon}}
				source={currentImg}
				resizeMode={FastImage.resizeMode.contain}
			/>
		</View>
	);
};

export default CurrentShowArt;
