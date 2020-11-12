import React from 'react';
import userpic from '../userprofile/kitty.jpg';

function Comment({ comment, user }) {
	return (
		<div className='flex w-100 pa3  '>
			<div className='flex w-100'>
				<div className='relative w2 h2 mr3'>
					<img className='br-100' alt='profile' src={userpic} width='32' height='32' />
				</div>
				<div className='flex w-80 '>
					<p className=' normal ma0 mr2'>
						<h2 className=' b f5 ma0 '>{user}</h2> {comment}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Comment;
