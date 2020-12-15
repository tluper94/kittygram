import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../navbar/NavBar';
import { X } from 'phosphor-react';
import { useHistory } from 'react-router-dom';

function Upload({ currentUser }) {
	//State that handles user files
	const [files, setFiles] = useState([]);
	const [caption, setCaption] = useState('');
	const history = useHistory();

	//Takes the files the user uplaods and turns them into an array and adds it to the 'files state
	const onFileChange = (e) => {
		const uploadfiles = Array.from(e.target.files);
		if (uploadfiles.length > 0) {
			setFiles(files.concat(uploadfiles));
		}
	};

	const onCaptionChange = (e) => {
		setCaption(e.target.value);
	};

	const handleSubmit = () => {
		console.log('clicked submit');
		if (files.length > 0) {
			const formdata = new FormData();
			console.log(files);
			for (let i = 0; i < files.length; i++) {
				formdata.append('files', files[i]);
			}

			formdata.append('caption', caption);
			formdata.append('user', currentUser.username);
			formdata.append('userid', currentUser.userid);

			console.log('filestream:', ...formdata);
			fetch('http://localhost:3000/upload', {
				method: 'post',
				headers: {},
				body: formdata
			})
				.then((res) => res.json())
				.then((data) => {
					const postid = data[0];
					history.push(`/p/${postid}`);
				});
		} else {
			console.log('No files');
		}
	};

	const removePreview = (e) => {
		setFiles(
			files.filter((item) => {
				return item.name !== e.currentTarget.id;
			})
		);
	};

	const restForm = (e) => {
		console.log('clicked reset');
		e.target.value = '';
	};

	//Displays a preview of the files user uploaded
	const previewFile = () => {
		if (files.length > 0) {
			return files.map((file, i) => {
				if (files[i].name.includes('.mp4')) {
					// If file is a video it returens a  jsx video element
					return (
						<PreviewImg key={files[i].name + i + 1}>
							<DeleteIcon id={files[i].name} onClick={removePreview}>
								<X color='white' size='22px' />
							</DeleteIcon>
							<video controls>
								<source
									src={URL.createObjectURL(files[i])}
									onLoad={URL.revokeObjectURL(files[i])}
									type='video/mp4'
								/>
							</video>
							<span>{files[i].name}</span>
						</PreviewImg>
					);
				} else {
					//  If file is a image it returns a jsx image element
					return (
						<PreviewImg key={files[i].name + i + 1}>
							<DeleteIcon id={file ? files[i].name : i} onClick={removePreview}>
								<X color='white' size='22px' />
							</DeleteIcon>
							<img
								src={URL.createObjectURL(files[i])}
								alt='Preview File'
								onLoad={URL.revokeObjectURL(files[i])}
							></img>
							<span>{files[i].name}</span>
						</PreviewImg>
					);
				}
			});
		} else {
			return <span style={{ fontSize: '30px' }}>Add images and videos...</span>;
		}
	};

	return (
		<div className='main'>
			<NavBar />
			<UploadContainer>
				<UploadWindow>{previewFile()} </UploadWindow>
				<CaptionInput onChange={onCaptionChange} placeholder='Enter some text....'></CaptionInput>
				<UploadForm>
					<input
						type='file'
						id='btn'
						hidden={true}
						multiple={true}
						onChange={onFileChange}
						onClick={restForm}
					></input>
					<InputLabel htmlFor='btn'> Choose File...</InputLabel>
					<UploadBtn onClick={handleSubmit}>Post</UploadBtn>
				</UploadForm>
			</UploadContainer>
		</div>
	);
}
export default Upload;

const UploadContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
	max-width: 935px;
	width: 500px;
	margin: auto;
	padding: 30px 10px;
	height: 100%;
	border-radius: 10px;

	@media (max-width: 640px) {
		width: 100%;
	}
`;

const UploadWindow = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 200px;
	max-height: 500px;
	border: 1px solid rgba(220, 220, 220, 0.8);
	box-shadow: 0px 0px 5px 3px rgba(220, 220, 220, 0.8);
	border-radius: 10px;
	margin-bottom: 15px;
	padding: 5px;
	overflow-y: scroll;
	color: black;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-thumb {
		background: #969696;
	}

	@media (max-width: 640px) {
		height: 300px;
	}
`;

const InputLabel = styled.label`
	background-color: #49acde;
	color: white;
	font-weight: 500;
	font-size: 18px;
	padding: 0.5rem;
	border-radius: 5px;
	cursor: pointer;
	margin-right: 10px;
	margin-bottom: 5px;
	width: 100px;
	box-shadow: 1px 1px 5px 2px rgba(200, 200, 200, 0.7);

	&:hover {
		transform: scale(1.05);
	}
`;

const UploadForm = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	width: 100%;
`;

const PreviewImg = styled.div`
	position: relative;
	width: 200px;
	height: 200px;
	margin: 5px;
	margin-bottom: 30px;
	border-radius: 8px;
	color: black;

	@media (max-width: 640px) {
		width: 100px;
		height: 100px;
		font-size: 10px;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	video {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;

const UploadBtn = styled.button`
	background-color: #49acde;
	color: white;
	padding: 0.5rem;
	border-radius: 5px;
	width: 100px;
	font-weight: 500;
	font-size: 18px;
	cursor: pointer;
	margin-right: 5px;
	margin-bottom: 5px;
	border: none;
	outline: none;
	box-shadow: 1px 1px 5px 2px rgba(200, 200, 200, 0.7);
	transition: transform 200ms ease;

	&:hover {
		transform: scale(1.05);
	}
`;

const CaptionInput = styled.textarea`
	max-width: 100%;
	min-width: 100%;
	max-height: 200px;
	min-height: 50px;
	margin-bottom: 10px;
	border: 1px solid rgba(220, 220, 220, 0.8);
	box-shadow: 0px 0px 5px 3px rgba(220, 220, 220, 0.8);
	border-radius: 10px;
	outline: none;
	padding: 5px;
`;

const DeleteIcon = styled.div`
	position: absolute;
	cursor: pointer;
	z-index: 1;
	top: 100;
	left: 0;

	&:hover {
		transform: scale(1.2);
	}
`;
