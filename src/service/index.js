import axios from 'axios';

export const getTrailers = () =>
	axios({
		url: 'https://cors-anywhere.herokuapp.com/https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs',
		method: 'GET',
	});
