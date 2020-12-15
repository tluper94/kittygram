import React from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import { Heart, ChatCircle } from 'phosphor-react';

function UserProfilePosts({ id, filename, user, likes, comments }) {
	const cloudFrontUrl = 'https://d2wddn0t8pomzy.cloudfront.net';

	const getNumOfComments = () => {
		let numOfComments;
		if (comments) {
			numOfComments = comments.length;
			return numOfComments;
		}
	};

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

	const url = `${cloudFrontUrl}/${btoa(imageRequest)}`;
	return (
		<Link to={`/p/${id}`}>
			<div className='userprofile-post-frame'>
				<img
					id={id}
					className='userprofile-post-img'
					alt='Post'
					sizes='(min-width: 700px) 68vw, 71vw'
					src={url}
					srcSet={`${url} 640w`}
				></img>
				<div className='post-overlay'>
					<div className='overlay-container'>
						<div className='overlay-section'>
							<div className='overlay-icon'>
								<Heart size={25} weight='fill' />
								<p>{likes}</p>
							</div>
							<div className='overlay-icon'>
								<ChatCircle size={25} weight='fill' />
								{getNumOfComments()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
export default UserProfilePosts;
