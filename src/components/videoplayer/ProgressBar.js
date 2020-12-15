import React, { useState, useRef, useEffect } from 'react';

function ProgressBar({ video, isPlaying }) {
	const [currentTime, setCurrentTime] = useState(0);
	const [currentPercentage, setCurrentPercentage] = useState(0);
	const progressRef = useRef();

	useEffect(() => {
		const media = video.current;

		const updateTime = () => {
			setCurrentTime(Math.round(media.currentTime));
			setCurrentPercentage((currentTime / Math.round(media.duration)) * 100);
		};
		media.addEventListener('timeupdate', updateTime);

		return () => {
			media.removeEventListener('timeupdate', updateTime);
		};
	});

	const onSeek = (e) => {
		const barWidth = e.currentTarget.clientWidth;
		const media = video.current;
		const mouseX = e.nativeEvent.offsetX;
		const newTime = (mouseX * media.duration) / barWidth;

		media.currentTime = newTime;
		setCurrentTime(Math.round(newTime));
	};

	return (
		<div>
			<progress
				ref={progressRef}
				onClick={onSeek}
				value={currentPercentage}
				max='100'
				style={{ width: '100%' }}
			></progress>
		</div>
	);
}
export default ProgressBar;
