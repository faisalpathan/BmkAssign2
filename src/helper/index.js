import { getTrailers } from '../service';

export const getMovieTrailers = async () => {
	try {
		const response = await getTrailers();
		if (response.status === 200) {
			const movieTrailers = response.data;
			const parsedMovieTrailers = parseMovieTrailers(movieTrailers);
			return parsedMovieTrailers;
		}
	} catch (error) {
		return [];
	}
};

export const parseMovieTrailers = movieTrailers => {
	const parsedMovieTrailers = [];
	// eslint-disable-next-line
	for (let [key, value] of Object.entries(movieTrailers[1])) {
		const movieData = {
			eventCode: value.EventCode,
			eventName: value.EventName,
			showDate: value.ShowDate,
			trailerUrl: getTrailerUrl(value.TrailerURL),
			eventGenre: value.EventGenre.split('|'),
			willWatchEventCount: value.wtsCount,
			willNotWatchEventCount: value.dwtsCount,
			mayBeWatchEventCount: value.maybeCount,
			eventLanguage: value.EventLanguage,
			wtcPercent: value.wtsPerc,
			upCount: value.csCount,
		};
		parsedMovieTrailers.push(movieData);
	}
	return parsedMovieTrailers;
};

export const getTrailerUrl = trailerUrl => {
	return trailerUrl
		.split('watch?v=')
		.join('embed/')
		.split('&')[0];
};
