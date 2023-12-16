import * as React from 'react';
import {View, Text} from 'react-native';
import ShowArt from './components/ShowArt';

export default function ShowScreen({route}) {
	const {showId} = route.params;
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<ShowArt showId={showId} />
		</View>
	);
}
