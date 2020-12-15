import React, { useRef, useState } from 'react';
import { Play, Pause } from 'phosphor-react';
import ProgressBar from './ProgressBar';
import './VideoPlayer.css';

function VideoPlayer({ file, title }) {
	const videoRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);

	const onPlay = () => {
		const video = videoRef.current;
		if (!isPlaying) {
			setIsPlaying(true);
			video.play();
		} else {
			setIsPlaying(false);
			video.pause();
		}
	};

	const displayPlayBtn = () => {
		if (!isPlaying) {
			return <Play color='white' size={40} weight='fill' />;
		} else {
			return <Pause color='white' size={40} weight='fill' />;
		}
	};

	const onEnded = (e) => {
		setIsPlaying(false);
	};

	return (
		<div className='videoplayer'>
			<video onEnded={onEnded} ref={videoRef} className='videoplayer__video'>
				<source src={file} type='video/mp4' />
			</video>
			<div className='videoplayer__controls'>
				<div className='videoplayer__controls_play' onClick={onPlay}>
					{displayPlayBtn()}
				</div>
				<div className='videoplayer__controls_progress'>
					<ProgressBar video={videoRef} isPlaying={isPlaying} />
				</div>
			</div>
		</div>
	);
}
export default VideoPlayer;
