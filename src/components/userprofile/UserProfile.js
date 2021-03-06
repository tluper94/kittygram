import React from 'react';
import './UserProfile.css';
import UserProfilePosts from './UserProfilePosts';
import kitty from './kitty.jpg';
import NavBar from '../navbar/NavBar';
import { users } from './database';

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
							<p className='profile-headline'>Trevor Luper</p>
							<p className='profile-headline'>Headline</p>
						</div>
					</section>
				</header>
				<div className='userprofile-posts-container'>
					{group(currentUser.post, 3).map((children, i) => {
						return (
							<div key={i} className='userprofile-post-section'>
								{children.map((link, i) => {
									return (
										<UserProfilePosts
											key={i}
											filename={link.name}
											user={currentUser.user}
											id={link.id}
											likes={link.likes}
											comments={link.comments}
										></UserProfilePosts>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
export default UserProfile;
