import React from 'react';
import injectSheet from 'react-jss';
import PlayButton from '../assests/play_btn.png';

const styles = {
	movieComponent: {
		marginTop: '4vh',
		marginBottom: '4vh',
		marginLeft: '1vw',
		marginRight: '1vw',
		width: '230px',
		maxHeight: '317px',
		display: 'inline-flex',
		position: 'relative',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	playButtonStyle: {
		position: 'absolute',
		cursor: 'pointer',
		marginTop: '10px',
		transition: 'transform 0.3s',
	},
	movieNameStyle: {
		color: 'white',
		fontSize: '0.9em',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '100%',
		transition: 'transform 0.3s',
	},
	releaseDateStyle: {
		position: 'absolute',
		color: 'white',
		height: '35px',
		width: '35px',
		backgroundColor: '#3cb395',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		lineHeight: '1.2',
		transition: 'transform 0.2s',
		borderRadius: '50%',
		textAlign: 'center',
		top: '1vh',
		right: '1vw',
		fontSize: '10px',
	},
	imageStyle: {
		width: '100%',
		cursor: 'pointer',
		minWidth: '192px',
		minHeight: '248px',
	},
};

const MovieComponent = ({ handleClickOperation, name, imgSrc, date, classes }) => {
	return (
		<div className={classes.movieComponent}>
			<img
				src={`https://in.bmscdn.com/events/moviecard/${imgSrc}.jpg`}
				alt="some"
				onClick={handleClickOperation}
				className={classes.imageStyle}
			/>
			<img className={classes.playButtonStyle} src={PlayButton} alt={name} />
			<span className={classes.movieNameStyle}>{name}</span>
			<span className={classes.releaseDateStyle}>
				{date.split(' ')[0]}
				<br /> {date.split(' ')[1].slice(0, date.split(' ')[1].length - 1)}
			</span>
		</div>
	);
};

MovieComponent.defaultProps = {};

export default injectSheet(styles)(MovieComponent);
