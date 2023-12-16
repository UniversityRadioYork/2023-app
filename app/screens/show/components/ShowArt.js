import * as React from 'react';
import {View} from 'react-native';

import FastImage from 'react-native-fast-image';

import myRadioGetRequest from '../../../requests/myRadioRequest';
import {sizes} from '../../../globals/constants/style';
import {web} from '../../../globals/constants/resources';

export default class ShowArt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImg: require('../../../assets/imagedefaults/jukebox.png'),
		};
		this.showId = props.showId;
	}

	componentDidMount() {
		myRadioGetRequest('timeslot/' + this.showId)
			.then(response => {
				this.setState({
					currentImg: {
						uri: web.mainSite + response['payload']['photo'],
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					},
				});
			})
			.catch(error => {});
	}

	render() {
		return (
			<View>
				<FastImage
					style={{width: sizes.camHeight, height: sizes.camHeight}}
					source={this.state.currentImg}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</View>
		);
	}
}
