import React from 'react';
import './UserProfile.css';
import Posts from './Posts';

const links = [
	'https://www.cbc.ca/kidscbc2/content/the_feed/kitty_sweets.jpg',
	'https://www.cbc.ca/kidscbc2/content/the_feed/kitty_sleep-compressor.jpg',
	'https://lh3.googleusercontent.com/proxy/5Px19ev2aNFQ3fctlMMKTDUtCyW9wXdL9U6usAOYM9soPpM9aQbMBrJpgEDiniinSQIYSGvtSWNR3rcBewGPGYZmxel1mrDFCQfvO6DqFbMk0XJvjSbGRytfaimOg0qtOK54WTTRT-VtDA',
	'https://www.litter-robot.com/blog/wp-content/uploads/2016/08/shutterstock_191770991-scared-cat-900x600.jpg',
	'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg',
	'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg',
	'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg',
	'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg',
	'https://thumbs.dreamstime.com/b/kittys-hand-kitty-red-rose-34877839.jpg'
];

function UserProfile() {
	return (
		<div className='profile'>
			<div className='page'>
				<header className='head'>
					<div className='picbox'>
						<div className='userpic'></div>
					</div>
					<section>
						<div className='userinfo'>
							<h2> Clevtrev 94 </h2>
							<div className='btncontainer'>
								<button className='editbtn'>Edit Profile</button>
							</div>
						</div>
						<div className='section'>
							<p>10 Post</p>
							<p className='marginleft'>10 followers</p>
							<p className='marginleft'>10 following</p>
						</div>
						<div>
							<p id='pt'>Trevor Luper</p>
							<p id='pt'>Headline</p>
						</div>
					</section>
				</header>
				<div className='posts'>
					{links.map((link, i) => {
						return <Posts src={links[i]}></Posts>;
					})}
				</div>
			</div>
		</div>
	);
}
export default UserProfile;
