import React from 'react';
import logo from './logo.png';
import './navbar.css';
import download from './download.svg';
import home from './home.svg';
import navigation from './navigation.svg';
import user from './user.svg';
import heart from './heart.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearState } from '../../slices/clearstateslice';

function NavBar() {
	const dispatch = useDispatch();

	console.log();

	const onLogout = () => {
		dispatch(clearState());
	};

	return (
		<nav className='navbar'>
			<div className='nav'>
				<div className='navcontent'>
					<div className='logo'>
						<Link to='/feed'>
							<img className='logoimg' alt='nav' src={logo}></img>
						</Link>
					</div>
					<input className='search' type='text' placeholder='Search'></input>
					<div className='navbuttons'>
						<a href='/'>
							<img className='navicon' alt='nav' src={home}></img>
						</a>
						<a href='/'>
							<img className='navicon margin-left' alt='nav' src={download}></img>
						</a>
						<a href='/'>
							<img className='navicon margin-left' alt='nav' src={navigation}></img>
						</a>
						<a href='/'>
							<img className='navicon margin-left' alt='nav' src={heart}></img>
						</a>
						<Link to='/signin' onClick={onLogout}>
							<img className='navicon margin-left' alt='nav' src={user}></img>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
