import * as React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import myRadioGetRequest from '../../../requests/myRadioRequest';
import {sizes} from '../../../globals/constants/style';
import {web} from '../../../globals/constants/resources';

const ShowArt = ({showId}) => {
	const [currentImg, setCurrentImg] = React.useState(
		require('../../../assets/imagedefaults/jukebox.png'),
	);

	React.useEffect(() => {
		myRadioGetRequest('timeslot/' + showId)
			.then(response => {
				setCurrentImg({
					uri: web.mainSite + response['payload']['photo'],
					headers: {Authorization: 'authToken'},
					priority: FastImage.priority.normal,
				});
			})
			.catch(error => {});
	}, [showId]);

	return (
		<View>
			<FastImage
				style={{width: sizes.camHeight, height: sizes.camHeight}}
				source={currentImg}
				resizeMode={FastImage.resizeMode.contain}
			/>
		</View>
	);
};

export default ShowArt;
