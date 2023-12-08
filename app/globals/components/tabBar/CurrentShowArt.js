import * as React from 'react';
import {View} from 'react-native';

import FastImage from 'react-native-fast-image';

import myRadioGetRequest from '../../../requests/myRadioRequest';
import {sizes} from '../../constants/style';
import {web} from '../../constants/resources';

export default class CurrentShowArt extends React.Component {
	constructor() {
		super();
		this.state = {
			currentImg: '',
		};
		this.updateImage = this.updateImage.bind(this);
	}

	componentDidMount() {
		this.updateImage();
		updateInterval = setInterval(this.updateImage, 5000);
	}

	componentWillUnmount() {
		// use intervalId from the state to clear the interval
		clearInterval(updateInterval);
	}

	updateImage() {
		myRadioGetRequest('timeslot/currenttimeslot')
			.then(response => {
				this.setState({
					currentImg: web.mainSite + response['payload']['photo'],
				});
			})
			.catch(error => {});
	}

	render() {
		return (
			<View>
				<FastImage
					style={{width: sizes.tabBarIcon, height: sizes.tabBarIcon}}
					source={{
						uri: this.state.currentImg,
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					}}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</View>
		);
	}
}
