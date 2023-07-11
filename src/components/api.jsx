/*export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60';
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cec9835aeamshea796f90d64fa98p1101d1jsn504df9a2d999',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch( url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} */


export const geoApiOptions = {
	method: "GET",
	headers: {
		'X-RapidAPI-Key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

