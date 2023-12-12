import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const colours = {
	black: '#000000',
	white: '#FFFFFF',
	uryblue: '#002a92',
};

export const sizes = {
	//dimension
	width,
	height,

	//fontSizes
	h1: 30,
	text: 16,
	smalltext: 12,

	//images
	tabBarIcon: height / 10,
	tabBarText: width - (2 * (height / 10) + 20),
};
