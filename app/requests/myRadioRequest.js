import axios from 'axios';

import {web} from '../globals/constants/resources';
import {apiKeys} from '../../apikeys';

export default async function myRadioGetRequest(endpoint) {
	let url = web.myradioApi + endpoint + `?api_key=` + apiKeys.myRadioKey;
	const response = await axios.get(url);
	return response.data;
}

export async function myRadioPutRequest(endpoint, body) {
	let url = web.myradioApi + endpoint + `?api_key=` + apiKeys.myRadioKey;
	const response = await axios.put(url, body);
	return response.data;
}
