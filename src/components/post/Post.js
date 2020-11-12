import React from 'react';
import NavBar from '../navbar/NavBar';
import './post.css';
import { users } from '../userprofile/database';
import Comment from './Comment';
import userpic from '../userprofile/kitty.jpg';
import { Heart, ChatCircle, PaperPlaneTilt, BookmarkSimple, DotsThree } from 'phosphor-react';

function Post() {
	const user = users[0];
	const filename = users[0].post[0].name;

	const cloudFrontUrl = 'https://d2wddn0t8pomzy.cloudfront.net';

	const imageRequest = JSON.stringify({
		bucket: 'kittygram',
		key: `${user.user}/${filename}`,
		edits: {
			resize: {
				width: 750,
				height: 750
			}
		}
	});

	const url = `${cloudFrontUrl}/${btoa(imageRequest)}`;

	return (
		<main className='main'>
			<NavBar />
			<div className='postmain-container'>
				<div className='post'>
					<div className='post-img-container'>
						<img
							className='post-img'
							alt='post'
							srcSet={`${url} 320w`}
							sizes='(max-width: 735px) 90vw, 600px'
						/>
					</div>
					<div className='comment-box'>
						<header className='user'>
							<img
								className='userprofilepic border-gradient'
								alt='Profile'
								src={userpic}
								width='40px'
								height='auto'
							></img>
							<h2 className='post-username ml-auto f4'>{user.user}</h2>
							<DotsThree size={32} className='ml-auto' />
						</header>
						<section className='comments'>
							{user.post[0].comments.map((comment, i) => {
								return (
									<Comment
										key={user.post[0].comments[i].id}
										comment={user.post[0].comments[i].comment}
										user={user.post[0].comments[i].username}
									/>
								);
							})}
						</section>
						<section className='db bt bw1 b--light-gray'>
							<Heart size={32} />
							<ChatCircle size={32} />
							<PaperPlaneTilt size={32} />
							<BookmarkSimple size={32} className='fr' />
							<h2 className='f5'>{user.post[0].likes} Likes</h2>
							<h2 className='f7 fw1'>{user.post[0].timestamp}</h2>
						</section>
						<section className='comment-input-container flex justify-start items-center'>
							<input className='comment-input' placeholder='Add a comment...'></input>
							<p className='comment-btn ml-auto mr2'>Post</p>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}
export default Post;
