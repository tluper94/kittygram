import React from 'react';
import playingCat from '../assets/kittyplaying.gif';

function Error() {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: '#fff'
			}}
		>
			<h1 style={{ fontSize: '80px', fontWeight: '300' }}>Kitty can't find this page</h1>
			<img alt='kitty loading' src={playingCat} width='700px' height='700px' />
		</div>
	);
}
export default Error;
