import React from 'react';
import MovieComponent from './components/MovieComponent';
import PlayerComponent from './components/PlayerComponent';
import { getMovieTrailers } from './helper';

const styles = {
	parentMoviesContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	mainContainerStyle: { backgroundColor: 'black' },
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerIndex: '',
			selectedMovies: '',
			trailersList: [],
		};
	}

	async componentDidMount() {
		const trailersList = await getMovieTrailers();
		this.setState({
			trailersList,
		});
	}

	handleOnSelect = index => {
		if (window.innerWidth < 495) {
			return this.handlePlayerIndexChange(index, 1);
		}
		if (window.innerWidth >= 496 && window.innerWidth <= 751) {
			return this.handlePlayerIndexChange(index, 2);
		}
		if (window.innerWidth > 752 && window.innerWidth <= 1017) {
			return this.handlePlayerIndexChange(index, 3);
		}
		if (window.innerWidth > 1017 && window.innerWidth <= 1293) {
			return this.handlePlayerIndexChange(index, 4);
		}
		if (window.innerWidth > 1294 && window.innerWidth <= 1585) {
			return this.handlePlayerIndexChange(index, 5);
		}
		if (window.innerWidth > 1586) {
			return this.handlePlayerIndexChange(index, 6);
		}
	};

	handlePlayerIndexChange = (index, noComponentInARow) => {
		return this.setState({
			playerIndex: this.state.trailersList[index - (index % noComponentInARow)].eventCode,
			selectedMovies: index,
		});
	};

	render() {
		const { parentMoviesContainer, mainContainerStyle } = styles;
		const { playerIndex, trailersList, selectedMovies } = this.state;
		return (
			<div style={mainContainerStyle}>
				<div style={parentMoviesContainer}>
					{trailersList.map((item, index) => {
						return (
							<React.Fragment key={item + index}>
								{playerIndex === item.eventCode && (
									<PlayerComponent
										youtubeUrl={trailersList[selectedMovies].trailerUrl}
										title={trailersList[selectedMovies].eventName}
										genres={trailersList[selectedMovies].eventGenre}
										language={trailersList[selectedMovies].eventLanguage}
										percent={trailersList[selectedMovies].wtcPercent}
										likes={trailersList[selectedMovies].upCount}
										date={trailersList[selectedMovies].showDate}
									/>
								)}
								<MovieComponent
									key={item.eventCode + index}
									handleClickOperation={() => this.handleOnSelect(index)}
									name={item.eventName}
									imgSrc={item.eventCode}
                  date={item.showDate}
								/>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
