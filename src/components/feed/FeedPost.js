import React from 'react';
import './Feed.css';
import kitty from '../userprofile/kitty.jpg';

function FeedPost({ src, username, caption }) {
	return (
		<div className='feed-post'>
			<div className='user-icon-container'>
				<div className='user-icon'>
					<img className='icon' alt='profile' src={kitty} />
				</div>
				<div>
					<h2>{username}</h2>
				</div>
			</div>
			<div className='post-img'>
				<img className='img' alt='post' sizes='(max-width: 735px) 100vw, 50vw' srcSet={`${src} 640w`} />
			</div>
			<div className='post-info'>
				<p className='info'>{caption}</p>
			</div>
		</div>
	);
}
export default FeedPost;
