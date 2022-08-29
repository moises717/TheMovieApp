interface CustomFetch {
	url: string;
}

export const customFetch = async <T>({url}: CustomFetch, options?: RequestInit): Promise<T> => {
	const response = await fetch(url, {
		...options,
	});

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	return response.json();
};
