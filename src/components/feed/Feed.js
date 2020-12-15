import React from 'react';
import './Feed.css';
import Navbar from '../navbar/NavBar';
import { posts } from './database';
import FeedPost from './FeedPost';

function Feed() {
	return (
		<main className='main'>
			<Navbar />
			<div className='feed-page-container'>
				<div className='feed-container'>
					{posts.map((post, i) => {
						return (
							<FeedPost
								key={`feed-${posts[i].id}`}
								src={posts[i].src}
								username={posts[i].username}
								caption={posts[i].caption}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
}
export default Feed;
