import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import UserProfile from '../components/userprofile/UserProfile';
import Signin from '../components/signin/Signin';
import Signup from '../components/signup/Signup';
import Feed from '../components/feed/Feed';
import Post from '../components/post/Post';
import { useDispatch } from 'react-redux';
import { clearState } from '../slices/clearstateslice';

function App() {
	const dispatch = useDispatch();

	function resetState() {
		dispatch(clearState());
	}
	return (
		<div className='App'>
			{/* <UserPost/> */}
			<Switch>
				<Route path='/profile'>
					<UserProfile />
				</Route>
				<Route path='/signin'>
					<Signin resetState={resetState} />
				</Route>
				<Route path='/signup'>
					<Signup resetState={resetState} />
				</Route>
				<Route path='/feed'>
					<Feed />
				</Route>
				<Route path='/p/:id'>
					<Post />
				</Route>
				<Route path='/'>
					<Feed />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
