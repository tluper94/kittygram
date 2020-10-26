import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../components/navbar/NavBar';
import UserProfile from '../components/userprofile/UserProfile';
import Signin from '../components/signin/Signin';

import { CheckViewport } from '../actions/actions';

const mapStateToProps = (state) => {
	return {
		isDesktop: state.setViewportSize.isDesktop
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		checkIsDesktop: () => dispatch(CheckViewport(window.innerWidth > 640))
	};
};

function App({ checkIsDesktop }) {
	useEffect(() => {
		checkIsDesktop();
		window.addEventListener('resize', checkIsDesktop);
	});

	return (
		<Router>
			<div className='App'>
				<NavBar />
				{/* <Feed/>
			<UserPost/> */}
				<Switch>
					<Route path='/profile'>
						<UserProfile />
					</Route>
					<Route path='/signin'>
						<Signin />
					</Route>
					<Route path='/'>
						<UserProfile />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
