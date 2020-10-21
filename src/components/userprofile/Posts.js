import React from 'react';
import './UserProfile.css';

function Posts({ src }) {
	return (
		<div className='postbox'>
			<img className='post' alt='Post' src={src} width='512px' height='auto'></img>
		</div>
	);
}
export default Posts;
