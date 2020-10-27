import React from 'react';
import './UserProfile.css';
import Posts from './Posts';
import kitty from './kitty.jpg';
import NavBar from '../navbar/NavBar';

const links = [
	{ id: 1, post: 'https://www.cbc.ca/kidscbc2/content/the_feed/kitty_sweets.jpg' },
	{ id: 2, post: 'https://www.cbc.ca/kidscbc2/content/the_feed/kitty_sleep-compressor.jpg' },
	{
		id: 3,
		post:
			'https://www.litter-robot.com/blog/wp-content/uploads/2016/08/shutterstock_191770991-scared-cat-900x600.jpg'
	},
	{ id: 4, post: 'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg' },
	{ id: 5, post: 'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg' },
	{ id: 6, post: 'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg' },
	{ id: 7, post: 'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg' },
	{ id: 8, post: 'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg' }
];

function UserProfile() {
	return (
		<div className='main'>
			<NavBar />
			<div className='profile-container'>
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
				<div className='posts-container'>
					{links.map((link, i) => {
						return <Posts key={links[i].id} src={links[i]}></Posts>;
					})}
				</div>
			</div>
		</div>
	);
}
export default UserProfile;
