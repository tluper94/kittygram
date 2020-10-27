import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import UserProfile from '../components/userprofile/UserProfile';
import Signin from '../components/signin/Signin';
import Signup from '../components/signup/Signup';

function App() {
	return (
		<Router>
			<div className='App'>
				{/* <Feed/>
			<UserPost/> */}
				<Switch>
					<Route path='/profile'>
						<UserProfile />
					</Route>
					<Route path='/signin'>
						<Signin />
					</Route>
					<Route path='/signup'>
						<Signup />
					</Route>
					<Route path='/'>
						<Signin />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
