import axios from 'axios';

import {apiKeys} from '../../apikeys';

export default async function myRadioGetRequest(endpoint) {
	let url =
		`https://ury.org.uk/api/v2/` + endpoint + `?api_key=` + apiKeys.myRadioKey;
	const response = await axios.get(url);
	return response.data;
}
