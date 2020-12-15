import React, { useState, useEffect } from 'react';
import NavBar from '../navbar/NavBar';
import './post.css';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { Heart, ChatCircle, PaperPlaneTilt, BookmarkSimple, DotsThree } from 'phosphor-react';
import Gallery from '@tluper94/react-gallery';
import VideoPlayer from '../videoplayer/VideoPlayer';
import { useHistory } from 'react-router-dom';
import KittyLoading from '../../assets/kittyloading.gif';

function Post({ currentUser }) {
	const postId = useParams();
	const [post, setPost] = useState([]);
	const [commentInput, setCommentInput] = useState('');
	const [comments, setComments] = useState([]);
	const cloudFrontUrl = 'https://d2wddn0t8pomzy.cloudfront.net';

	const history = useHistory();

	useEffect(() => {
		const getPost = () => {
			fetch('http://localhost:3000/get_post', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(postId)
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						history.push('/400');
					} else {
						setPost(data);
						if (data[0].comments > 0) {
							fetch('http://localhost:3000/comments', {
								method: 'post',
								headers: {
									'Content-Type': 'application/json'
								},
								body: JSON.stringify({
									postid: data[0].postid
								})
							})
								.then((res) => res.json())
								.then((comments) => {
									setComments(comments);
								});
						}
					}
				});
		};
		getPost();
	}, [postId, history]);

	const rezizedImages = () => {
		const media = post[1];
		return media.map((image, i) => {
			if (media[i].name.includes('.mp4')) {
				return (
					<div key={media[i].name} style={{ width: '100%', height: '100%' }}>
						<VideoPlayer file={media[i].link} title={media[i].name} />
					</div>
				);
			} else {
				const imageRequest = JSON.stringify({
					bucket: 'kittygram',
					key: media[i].name,
					edits: {
						resize: {
							width: 750,
							height: 750
						}
					}
				});
				return <img key={media[i].name} alt='post' src={`${cloudFrontUrl}/${btoa(imageRequest)}`} />;
			}
		});
	};

	const onInputChange = (e) => {
		setCommentInput(e.target.value);
	};

	const onSubmitComment = () => {
		fetch('http://localhost:3000/submit_comment', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: currentUser.username,
				comment: commentInput,
				postId: post[0].postid
			})
		})
			.then((res) => res.json())
			.then((comments) => {
				setComments(comments);
			});
	};

	if (post.length > 0) {
		let displayDots;
		post[1].length > 1 ? (displayDots = { color: 'white', size: '3vh', inside: true }) : (displayDots = {});
		return (
			<main className='main'>
				<NavBar />
				<div className='postmain-container'>
					<div className='post'>
						<div className='post-img-container'>
							<Gallery
								width={'100%'}
								height={'100%'}
								controls={{ color: 'white', size: '4vw', weight: 'fill' }}
								dots={displayDots}
							>
								{rezizedImages()}
							</Gallery>
						</div>
						<div className='comment-box'>
							<header className='user'>
								<h2 className='post-username ml-auto f4'>{post[0].username}</h2>
								<DotsThree size={32} className='ml-auto' />
							</header>
							<section className='comments'>
								{comments.map((comment, i) => {
									return (
										<Comment
											key={comments[i].id}
											user={comments[i].username}
											comment={comments[i].comment}
										/>
									);
								})}
							</section>
							<section className='db bt bw1 b--light-gray'>
								<Heart size={32} />
								<ChatCircle size={32} />
								<PaperPlaneTilt size={32} />
								<BookmarkSimple size={32} className='fr' />
								<h2 className='f5'>{post[0].likes} Likes</h2>
								<h2 className='f7 fw1'>Test</h2>
							</section>
							<section className='comment-input-container flex justify-start items-center'>
								<input
									onChange={onInputChange}
									className='comment-input'
									placeholder='Add a comment...'
								></input>
								<p onClick={onSubmitComment} className='comment-btn ml-auto mr2'>
									Post
								</p>
							</section>
						</div>
					</div>
				</div>
			</main>
		);
	} else {
		return (
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<img alt='kitty loading' src={KittyLoading} width='500px' height='500px' />
				<h1>loading....</h1>
			</div>
		);
	}
}
export default Post;
