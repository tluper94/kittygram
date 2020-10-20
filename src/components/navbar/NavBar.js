import React from 'react';
import logo from './logo.png';
import './navbar.css';
import download from './download.svg';
import home from './home.svg';
import navigation from './navigation.svg';
import user from './user.svg';
import heart from './heart.svg';

function NavBar() {
	return (
		<nav className='navbar'>
			<div className='nav'>
				<div className='navcontent'>
					<div className='logo'>
						<img className='logoimg' alt='nav' src={logo} width='150px' height='auto'></img>
					</div>
					<input className='search' type='text' placeholder='Search'></input>
					<div className='navbuttons'>
						<img alt='nav' src={home} width='25px' height='auto'></img>
						<img className='navicon' alt='nav' src={download}></img>
						<img className='navicon' alt='nav' src={navigation}></img>
						<img className='navicon' alt='nav' src={heart}></img>
						<img className='navicon' alt='nav' src={user}></img>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
