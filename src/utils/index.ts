import {API_KEY} from '../constants';

interface CustomFetch {
	url: string;
}

export const customFetch = async <T>({url}: CustomFetch, options?: RequestInit): Promise<T> => {
	const response = await fetch(url + API_KEY, {
		...options,
	});

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	return response.json();
};
