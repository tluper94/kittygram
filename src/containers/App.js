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
	const currentUser = 'tluper94';

	function resetState() {
		dispatch(clearState());
	}
	return (
		<div className='App'>
			{/* <UserPost/> */}
			<Switch>
				<Route path={`/${currentUser}`}>
					<UserProfile />
				</Route>
				<Route path='/signin'>
					<Signin resetState={resetState} currentUser={currentUser} />
				</Route>
				<Route path='/signup'>
					<Signup resetState={resetState} />
				</Route>
				<Route path='/feed'>
					<Feed />
				</Route>
				<Route path={`/p/:id`}>
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
