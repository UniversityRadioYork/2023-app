import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import myRadioGetRequest, {
	myRadioPutRequest,
} from '../../../requests/myRadioRequest';
import {colours, sizes, fonts} from '../../../globals/constants/style';

const defaultBoxText = 'Send us a message!';

function sendMessage(messageText) {
	console.log('sending message');
	myRadioGetRequest('timeslot/currenttimeslot')
		.then(response => {
			if (response['payload']) {
				timeslotId = response['payload']['timeslot_id'];
				myRadioPutRequest(`timeslot/${timeslotId}/sendmessage`, {
					message: messageText,
				}).catch(error => {});
			}
		})
		.catch(error => {});
}

export default function MessageBox() {
	const [textBoxStyling, setTextBoxStyling] = useState({});

	return (
		<View style={[styles.messageBox, textBoxStyling]}>
			<TextInput
				style={styles.messageText}
				ref={input => {
					this.textInput = input;
				}}
				placeholder={defaultBoxText}
				onSubmitEditing={input => {
					sendMessage(input.nativeEvent.text);
					this.textInput.clear();
				}}
			/>
		</View>
	);
}

let styles = StyleSheet.create({
	messageBox: {
		height: sizes.messageBoxHeight,
		width: sizes.messageBoxWidth,
		backgroundColor: colours.white,
		borderColor: colours.paleblue,
		borderWidth: sizes.borderWidthUnselected,
	},
	messageText: {
		fontFamily: fonts.boldTextFont,
		color: colours.black,
	},
});
