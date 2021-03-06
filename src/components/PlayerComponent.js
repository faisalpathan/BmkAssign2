import React from 'react';
import injectSheet from 'react-jss';
import LikeButton from '../assests/like_white.png';
import Calender from '../assests/calendar.png';

const styles = {
	playerContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '95vw',
		margin: '3vh 1vw 1vh 1vw',
		flexWrap: 'wrap',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		justifyContent: 'center',
	},
	youtubeContainer: {
		height: '50vh',
		width: '55vw',
		flex: 0.65,
		borderRadius: 8,
	},
	textStyle: {
		color: 'white',
		margin: '10px 20px',
		padding: 0,
		float: 'left',
		fontSize: '1em',
	},
	trailerDetailsContainer: {
		flex: 0.35,
		marginLeft: '2vw',
		border: '1px solid white',
		paddingLeft: '1vw',
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 8,
		marginTop: '0.3vh',
	},
	genreStyle: {
		border: '1px solid white',
		padding: 5,
		borderRadius: '20px',
		lineHeight: 1,
	},
	genreContainerStyle: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	likeAndCalenderComponentStyle: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		display: 'flex',
		alignItems: 'center',
	},
	likeAndCalenderContainerStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
};

class PlayerComponent extends React.PureComponent {
	renderLikeAndCalenderComponent = (image, altName, title, subtitle) => {
		const { classes } = this.props;
		return (
			<div className={classes.likeAndCalenderComponentStyle}>
				<img src={image} alt={altName} />
				<div>
					<span className={classes.textStyle}>{title}</span>
					<br />
					<span className={classes.textStyle}>{subtitle}</span>
				</div>
			</div>
		);
	};

	render() {
		const { youtubeUrl, title, genres, language, percent, likes, date, classes } = this.props;
		return (
			<div className={classes.playerContainer}>
				<iframe className={classes.youtubeContainer} title={title} src={youtubeUrl} />
				<div className={classes.trailerDetailsContainer}>
					<p style={{ ...styles.textStyle, fontSize: '1.5em' }}>{title}</p>
					<p className={classes.textStyle}>{language}</p>
					<div className={classes.genreContainerStyle}>
						{genres.map(genre => {
							return (
								<span key={genre} style={{ ...styles.textStyle, ...styles.genreStyle }}>
									{genre}
								</span>
							);
						})}
					</div>
					<br />
					<div className={classes.likeAndCalenderContainerStyle}>
						{this.renderLikeAndCalenderComponent(LikeButton, 'like', percent, likes)}
						{this.renderLikeAndCalenderComponent(
							Calender,
							'calender',
							`${date.split(',')[0]}`,
							`${date.split(',')[1]}`
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(PlayerComponent);
