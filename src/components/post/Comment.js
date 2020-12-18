import React, { useState, useEffect } from 'react';

function Comment({ comment, user }) {
	const [userpic, setUserPic] = useState('');

	useEffect(() => {
		const getUserPic = () => {
			fetch('http://69.220.165.55:3000/user', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: user
				})
			})
				.then((res) => res.json())
				.then((user) => {
					if (user[0].profile_pic) {
						setUserPic(user[0].profile_pic);
					}
				});
		};
		getUserPic();
	}, [user]);

	return (
		<div className='flex w-100 h-auto mb3 pa3  '>
			<div className='flex w-100'>
				<div className='relative w2 h2 mr3'>
					<img className='br-100' alt='profile' src={userpic} width='32' height='32' />
				</div>
				<div className='flex-row w-80 '>
					<h2 className=' b f5 ma0 '>{user}</h2>
					<p className=' normal ma0 mr2'>{comment}</p>
				</div>
			</div>
		</div>
	);
}

export default Comment;
