import React from 'react';
import './UserProfile.css';
import UserProfilePosts from './UserProfilePosts';
import kitty from './kitty.jpg';
import NavBar from '../navbar/NavBar';

const users = [
	{
		user: 'tluper94',
		post: [
			{ id: 1, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty1.png', name: 'kitty1.png' },
			{ id: 2, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty2.jpg', name: 'kitty2.jpg' },
			{ id: 3, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitten3.jpg', name: 'kitten3.jpg' },
			{ id: 4, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty4.jpg', name: 'kitty4.jpg' },
			{ id: 5, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty5.jpg', name: 'kitty5.jpg' },
			{ id: 6, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty6.jpg', name: 'kitty6.jpg' },
			{ id: 7, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty7.jpg', name: 'kitty7.jpg' },
			{ id: 8, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty8.jpg', name: 'kitty8.jpg' },
			{ id: 9, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty9.jpg', name: 'kitty9.jpg' },
			{ id: 10, post: 'https://kittygram.s3.amazonaws.com/tluper94/kitty10.jpg', name: 'kitty10.jpg' }
		]
	}
];

const currentUser = users[0];

// Divides users array into arrays that have max number of items
const group = (items, n) =>
	items.reduce((acc, x, i) => {
		const index = Math.floor(i / n);
		acc[index] = [...(acc[index] || []), x];
		return acc;
	}, []);

function UserProfile() {
	return (
		<main className='main'>
			<NavBar />
			<div className='userprofile-container'>
				<header className='head'>
					<div className='profile-img-container'>
						<div className='profile-img-frame'>
							<img className='profile-img' alt='user' src={kitty}></img>
						</div>
					</div>
					<section>
						<div className='profile-info'>
							<h2 className='username'> Clevtrev 94 </h2>
							<div className='btncontainer'>
								<button className='editbtn'>Edit Profile</button>
							</div>
						</div>
						<div className='section'>
							<p>10 Post</p>
							<br />
							<p className='marginleft'>10 followers</p>
							<p className='marginleft'>10 following</p>
						</div>
						<div>
							<p id='pt'>Trevor Luper</p>
							<p id='pt'>Headline</p>
						</div>
					</section>
				</header>
				<div className='fmp'>
					<div className='posts-container'>
						{group(currentUser.post, 3).map((children, i) => {
							return (
								<div key={i} className='post-section'>
									{children.map((link, i) => {
										return (
											<UserProfilePosts
												key={i}
												filename={link.name}
												user={currentUser.user}
												id={link.id}
											></UserProfilePosts>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
export default UserProfile;
