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
import Dropdown from './Dropdown';
import { UserCircle, BookmarkSimple, Gear, Plus } from 'phosphor-react';

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
					<div className='nav-btns-container'>
						<a className='nav-btn' href='/'>
							<img className='navicon' alt='nav' src={home}></img>
						</a>
						<a className='nav-btn' href='/tluper94'>
							<img className='navicon' alt='nav' src={download}></img>
						</a>
						<a className='nav-btn' href='/'>
							<img className='navicon' alt='nav' src={navigation}></img>
						</a>
						<a className='nav-btn' href='/'>
							<img className='navicon' alt='nav' src={heart}></img>
						</a>
						<Dropdown
							src={user}
							items={[
								{ name: 'Add Post', link: '/upload', icon: <Plus /> },
								{ name: 'Profile', link: '/tluper94', icon: <UserCircle /> },
								{ name: 'Saved', link: '/tluper94', icon: <BookmarkSimple /> },
								{ name: 'Settings', link: '/', icon: <Gear /> },
								{ name: 'Log Out', link: '/signin', function: onLogout }
							]}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
