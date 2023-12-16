import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';

import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import myRadioGetRequest from '../../../requests/myRadioRequest';
import {sizes, colours, fonts} from '../../../globals/constants/style';
import {web} from '../../../globals/constants/resources';

class CurrentAndNextClass extends React.Component {
	constructor() {
		super();
		this.state = {
			currentShow: '',
			currentShowTime: '',
			currentShowArt: require('../../../assets/imagedefaults/jukebox.png'),
			currentShowId: false,
			nextShow: '',
			nextShowTime: '',
			nextShowArt: require('../../../assets/imagedefaults/jukebox.png'),
			nextShowId: false,
		};
		this.updateShows = this.updateShows.bind(this);
	}

	componentDidMount() {
		this.updateShows();
		updateInterval = setInterval(this.updateShows, 5000);
	}

	componentWillUnmount() {
		clearInterval(updateInterval);
	}

	parseDateInt(dateInt) {
		if (dateInt) {
			if (dateInt != 'The End of Time') {
				let date = new Date(dateInt * 1000);
				return String(
					date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2),
				);
			} else {
				return dateInt;
			}
		} else {
			return 'Now';
		}
	}

	updateShows() {
		myRadioGetRequest('timeslot/currentandnext')
			.then(response => {
				this.setState({
					currentShow: response['payload']['current']['title'],
					currentShowTime:
						this.parseDateInt(response['payload']['current']['start_time']) +
						' - ' +
						this.parseDateInt(response['payload']['current']['end_time']),
					currentShowArt: {
						uri: web.mainSite + response['payload']['current']['photo'],
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					},
					currentShowId: response['payload']['current']['id'],
					nextShow: response['payload']['next']['title'],
					nextShowTime:
						this.parseDateInt(response['payload']['next']['start_time']) +
						' - ' +
						this.parseDateInt(response['payload']['next']['end_time']),
					nextShowArt: {
						uri: web.mainSite + response['payload']['next']['photo'],
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					},
					nextShowId: response['payload']['next']['id'],
				});
			})
			.catch(error => {});
	}

	render() {
		const {navigation} = this.props;
		return (
			<View>
				<Pressable
					onPress={() => {
						if (this.state.currentShowId) {
							navigation.navigate('Show', {showId: this.state.currentShowId});
						}
					}}>
					<View style={styles.currentMainContainer}>
						<View style={styles.titleAndTime}>
							<Text
								style={styles.currentShowName}
								numberOfLines={2}
								ellipsizeMode="tail">
								{this.state.currentShow}
							</Text>
							<Text
								style={styles.currentTimeInfo}
								numberOfLines={2}
								ellipsizeMode="tail">
								{this.state.currentShowTime}
							</Text>
						</View>
						<FastImage
							style={{width: sizes.tabBarIcon, height: sizes.tabBarIcon}}
							source={this.state.currentShowArt}
							resizeMode={FastImage.resizeMode.contain}
						/>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						if (this.state.nextShowId) {
							navigation.navigate('Show', {showId: this.state.nextShowId});
						}
					}}>
					<View style={styles.nextMainContainer}>
						<FastImage
							style={{width: sizes.tabBarIcon, height: sizes.tabBarIcon}}
							source={this.state.nextShowArt}
							resizeMode={FastImage.resizeMode.contain}
						/>
						<View style={styles.titleAndTime}>
							<Text
								style={styles.nextShowName}
								numberOfLines={2}
								ellipsizeMode="tail">
								{this.state.nextShow}
							</Text>
							<Text
								style={styles.nextTimeInfo}
								numberOfLines={2}
								ellipsizeMode="tail">
								{this.state.nextShowTime}
							</Text>
						</View>
					</View>
				</Pressable>
			</View>
		);
	}
}

export default function CurrentAndNext() {
	const navigation = useNavigation();

	return <CurrentAndNextClass navigation={navigation} />;
}

let styles = StyleSheet.create({
	currentMainContainer: {
		backgroundColor: colours.lighterblue,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: sizes.showInfoHeight,
		width: sizes.showInfoWidth,
	},
	nextMainContainer: {
		backgroundColor: colours.plainblue,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: sizes.showInfoHeight,
		width: sizes.showInfoWidth,
	},
	currentShowName: {
		fontSize: sizes.text,
		fontFamily: fonts.titleFont,
		color: colours.black,
		textAlign: 'left',
		width: sizes.showInfoWidth - sizes.showInfoHeight - 2 * sizes.textPadding,
	},
	currentTimeInfo: {
		fontSize: sizes.smalltext,
		fontFamily: fonts.subTitleFont,
		color: colours.black,
		textAlign: 'left',
		width: sizes.showInfoWidth - sizes.showInfoHeight - 2 * sizes.textPadding,
	},
	nextShowName: {
		fontSize: sizes.text,
		fontFamily: fonts.titleFont,
		color: colours.black,
		textAlign: 'right',
		width: sizes.showInfoWidth - sizes.showInfoHeight - 2 * sizes.textPadding,
	},
	nextTimeInfo: {
		fontSize: sizes.smalltext,
		fontFamily: fonts.subTitleFont,
		color: colours.black,
		textAlign: 'right',
		width: sizes.showInfoWidth - sizes.showInfoHeight - 2 * sizes.textPadding,
	},
	showArt: {
		width: sizes.showInfoHeight,
		height: sizes.showInfoHeight,
	},
	titleAndTime: {padding: sizes.textPadding},
});
