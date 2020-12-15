import { useEffect, useState, useRef } from 'react';

export default function useClickOutside(intialState) {
	const [clickedOutside, setClickedOutside] = useState(intialState);
	const [clicked, setClicked] = useState(false);

	const ref = useRef(null);

	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			setClickedOutside(true);
			setClicked(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	return { ref, clickedOutside, setClickedOutside, clicked, setClicked };
}
