import React from 'react';
import './UserProfile.css';

function Posts({ src }) {
	return (
		<div className='post-frame'>
			<img className='post' alt='Post' src={src.post}></img>
		</div>
	);
}
export default Posts;
