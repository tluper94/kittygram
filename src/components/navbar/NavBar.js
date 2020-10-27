import React from 'react';
import logo from './logo.png';
import './navbar.css';
import download from './download.svg';
import home from './home.svg';
import navigation from './navigation.svg';
import user from './user.svg';
import heart from './heart.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
	const isDestktop = useSelector((state) => state.setViewportSize.isDesktop);
	if (isDestktop) {
		return (
			<nav className='navbar'>
				<div className='nav'>
					<div className='navcontent'>
						<div className='logo'>
							<Link to='/signin'>
								<img className='logoimg' alt='nav' src={logo} width='150px' height='auto'></img>
							</Link>
						</div>
						<input className='search' type='text' placeholder='Search'></input>
						<div className='navbuttons'>
							<a href='/'>
								<img alt='nav' src={home} width='25px' height='auto'></img>
							</a>
							<a href='/'>
								<img className='navicon' alt='nav' src={download}></img>
							</a>
							<a href='/'>
								<img className='navicon' alt='nav' src={navigation}></img>
							</a>
							<a href='/'>
								<img className='navicon' alt='nav' src={heart}></img>
							</a>
							<a href='/'>
								<img className='navicon' alt='nav' src={user}></img>
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	} else {
		return (
			<nav className='navbar'>
				<div className='nav'>
					<div className='navcontent'>
						<div className='logo'>
							<a href='/'>
								<img className='logoimg' alt='nav' src={logo} width='150px' height='auto'></img>
							</a>
						</div>
						<div className='navbuttons'>
							<a href='/'>
								<img alt='nav' src={home} width='25px' height='auto'></img>
							</a>
							<a href='/'>
								<img className='navicon' alt='nav' src={download}></img>
							</a>
							<a href='/'>
								<img className='navicon' alt='nav' src={navigation}></img>
							</a>
							<a href='/'>
								<img className='navicon' alt='nav' src={heart}></img>
							</a>
							<a href='/'>
								<img className='navicon' alt='nav' src={user}></img>
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
export default NavBar;
