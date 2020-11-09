import React from 'react';
import './modal.css';

const Modal = ({ displayModal }) => {
	return (
		<div className={displayModal}>
			<div className='modal-content'>
				<p>This modal is awsome</p>
			</div>
		</div>
	);
};
export default Modal;
