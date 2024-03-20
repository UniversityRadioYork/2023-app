import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';

import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import myRadioGetRequest from '../../../requests/myRadioRequest';
import {sizes, colours, fonts} from '../../../globals/constants/style';
import {web} from '../../../globals/constants/resources';
import parseDateInt from '../../../globals/utils/ParseDateInt';

function CurrentAndNextClass() {
	const [state, setState] = React.useState({
		currentShow: '',
		currentShowTime: '',
		currentShowArt: require('../../../assets/imagedefaults/jukebox.png'),
		currentShowId: false,
		nextShow: '',
		nextShowTime: '',
		nextShowArt: require('../../../assets/imagedefaults/jukebox.png'),
		nextShowId: false,
	});
	const navigation = useNavigation();

	const updateShows = () => {
		myRadioGetRequest('timeslot/currentandnext')
			.then(response => {
				setState({
					currentShow: response['payload']['current']['title'],
					currentShowTime:
						parseDateInt(response['payload']['current']['start_time']) +
						' - ' +
						parseDateInt(response['payload']['current']['end_time']),
					currentShowArt: {
						uri: web.mainSite + response['payload']['current']['photo'],
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					},
					currentShowId: response['payload']['current']['id'],
					nextShow: response['payload']['next']['title'],
					nextShowTime:
						parseDateInt(response['payload']['next']['start_time']) +
						' - ' +
						parseDateInt(response['payload']['next']['end_time']),
					nextShowArt: {
						uri: web.mainSite + response['payload']['next']['photo'],
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					},
					nextShowId: response['payload']['next']['id'],
				});
			})
			.catch(error => {});
	};

	React.useEffect(() => {
		updateShows();
		const updateInterval = setInterval(updateShows, 5000);

		return () => {
			clearInterval(updateInterval);
		};
	}, []);

	return (
		<View>
			<Pressable
				onPress={() => {
					if (state.currentShowId) {
						navigation.navigate('Show', {showId: state.currentShowId});
					}
				}}>
				<View style={styles.currentMainContainer}>
					<View style={styles.titleAndTime}>
						<Text
							style={styles.currentShowName}
							numberOfLines={2}
							ellipsizeMode="tail">
							{state.currentShow}
						</Text>
						<Text
							style={styles.currentTimeInfo}
							numberOfLines={2}
							ellipsizeMode="tail">
							{state.currentShowTime}
						</Text>
					</View>
					<FastImage
						style={{width: sizes.tabBarIcon, height: sizes.tabBarIcon}}
						source={state.currentShowArt}
						resizeMode={FastImage.resizeMode.contain}
					/>
				</View>
			</Pressable>
			<Pressable
				onPress={() => {
					if (state.nextShowId) {
						navigation.navigate('Show', {showId: state.nextShowId});
					}
				}}>
				<View style={styles.nextMainContainer}>
					<FastImage
						style={{width: sizes.tabBarIcon, height: sizes.tabBarIcon}}
						source={state.nextShowArt}
						resizeMode={FastImage.resizeMode.contain}
					/>
					<View style={styles.titleAndTime}>
						<Text
							style={styles.nextShowName}
							numberOfLines={2}
							ellipsizeMode="tail">
							{state.nextShow}
						</Text>
						<Text
							style={styles.nextTimeInfo}
							numberOfLines={2}
							ellipsizeMode="tail">
							{state.nextShowTime}
						</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
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
