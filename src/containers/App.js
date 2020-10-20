import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import NavBar from '../components/navbar/NavBar';

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

function App() {
	return (
		<div className='App'>
			<NavBar />
			{/* <UserProfile/>
			<Feed/>
			<UserPost/> */}
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
