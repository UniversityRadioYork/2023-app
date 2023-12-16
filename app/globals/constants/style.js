import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const colours = {
	black: '#000000',
	white: '#FFFFFF',
	uryblue: '#002a92',
	darkerblue: '#13285E',
	lighterblue: '#638DF7',
	paleblue: '#CCDAFF',
	plainblue: '#99B6FF',
};

export const sizes = {
	//dimension
	width,
	height,

	//text
	h1: 30,
	text: 16,
	smalltext: 12,

	textPadding: 10,

	//images
	tabBarIcon: height / 10,
	tabBarText: width - (2 * (height / 10) + 20),
	camHeight: width / 2,
	camWidth: (width / 2 / 3) * 4,

	//elements
	showInfoHeight: height / 10,
	showInfoWidth: width / 1.5,
	messageBoxHeight: height / 8,
	messageBoxWidth: (width / 2 / 3) * 4,

	//borders
	borderWidthUnselected: 3,
	borderWidthSelected: 5,
};

export const fonts = {
	titleFont: 'Montserrat-Bold',
	subTitleFont: 'Montserrat-Regular',
	boldTextFont: 'Roboto-Bold',
	textFont: 'Roboto-Regular',
};
