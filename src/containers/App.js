import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import UserProfile from '../components/userprofile/UserProfile';
import Signin from '../components/signin/Signin';
import Signup from '../components/signup/Signup';
import Feed from '../components/feed/Feed';
import Post from '../components/post/Post';
import Upload from '../components/upload/Upload';
import NavBar from '../components/navbar/NavBar';
import Error from './Error';
import { useDispatch, useSelector } from 'react-redux';
import { clearState } from '../slices/clearstateslice';

function App() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const currentUser = state.user.currentUser;

	function resetState() {
		dispatch(clearState());
	}
	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route path='/signin'>
					<Signin resetState={resetState} currentUser={currentUser} />
				</Route>
				<Route path='/signup'>
					<Signup resetState={resetState} />
				</Route>
				<Route path='/upload'>
					<Upload currentUser={currentUser} />
				</Route>
				<Route path='/400'>
					<Error />
				</Route>
				<Route path='/feed' children={<Feed />} />
				<Route path='/p/:id' children={<Post currentUser={currentUser} />} />
				<Route path='/:id' children={<UserProfile currentUser={currentUser} />} />
				<Route path='/'>
					<Feed />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
