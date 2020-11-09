import React, { useState } from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import { Heart, ChatCircle } from 'phosphor-react';

function UserProfilePosts({ id, filename, user }) {
	const [displayOverlay, setDisplayOverlay] = useState('display-none');

	const cloudFrontUrl = 'https://d2wddn0t8pomzy.cloudfront.net';

	const imageRequest = JSON.stringify({
		bucket: 'kittygram',
		key: `${user}/${filename}`,
		edits: {
			resize: {
				width: 293,
				height: 293
			}
		}
	});

	const onPostHover = () => {
		setDisplayOverlay('post-overlay');
	};

	const onMouseLeave = () => {
		setDisplayOverlay('display-none');
	};

	const url = `${cloudFrontUrl}/${btoa(imageRequest)}`;
	return (
		<Link to={`/p/${id}`}>
			<div className='post-frame' onMouseOver={onPostHover} onMouseOut={onMouseLeave}>
				<img
					id={id}
					className='post'
					alt='Post'
					sizes='(min-width: 700px) 68vw, 71vw'
					src={url}
					srcSet={`${url} 640w`}
				></img>
				<div className={displayOverlay}>
					<div className='overlay-container'>
						<div className='overlay-section'>
							<div className='overlay-icon'>
								<Heart size={25} weight='fill' />
								<p>10</p>
							</div>
							<div className='overlay-icon'>
								<ChatCircle size={25} weight='fill' />5
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
export default UserProfilePosts;
