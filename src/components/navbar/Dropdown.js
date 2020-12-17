import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { spring } from 'popmotion';
import { Link } from 'react-router-dom';
import useClickOutside from '..//../customhooks/CustomHooks';

function Dropdown({ src, items }) {
	const { ref, clickedOutside, setClickedOutside, clicked, setClicked } = useClickOutside(true);

	const options = items.map((item, i) => {
		return (
			<Option
				key={`option-${i + 1}`}
				onClick={() => {
					setClicked(false);
					if (item.function) {
						item.function();
					}
				}}
				animate={
					clicked
						? {
								visibility: 'visible'
						  }
						: {
								visibility: 'hidden'
						  }
				}
			>
				<Link to={item.link}>
					<div style={{ marginRight: '15px' }}>{item.icon}</div>
					{item.name}
				</Link>
			</Option>
		);
	});

	return (
		<DropDownMenu ref={ref}>
			<Icon
				src={src}
				onClick={() => {
					setClicked(!clicked);
					setClickedOutside(false);
				}}
			></Icon>
			<div
				style={{
					position: 'relative',
					right: '184px',
					top: '60px'
				}}
			>
				<OptionsContainer
					initial={{ height: 0 }}
					animate={
						clicked && !clickedOutside
							? {
									opacity: [null, 1],
									height: 'auto',
									boxShadow: '0px 0px 5px 1px rgba(200, 200, 200, 0.9)'
							  }
							: {
									opacity: 0,
									height: 0,
									boxShadow: '0px 0px 0px 0px rgba(219,219,219, 1)',
									transition: { type: spring, duration: 0.2 }
							  }
					}
					transition={{ duration: 0.1 }}
				>
					<div
						style={{
							visibility: `${clicked ? 'visible' : 'hidden'}`,
							position: 'relative',
							width: '100%',
							height: '0',
							top: '165px',
							left: '0',
							borderBottom: '1px solid black',
							transition: 'visibility 1ms ease'
						}}
					></div>
					{options}
				</OptionsContainer>
				<OptionContainerArrow
					animate={
						clicked
							? {
									boxShadow: ' 0px 0px 5px 1px rgba(219, 219, 219, 0.9)'
							  }
							: {
									boxShadow: '0px 0px 5px 1px rgba(219, 219, 219, 0.0)'
							  }
					}
					clicked={clicked}
				/>
			</div>
		</DropDownMenu>
	);
}

const DropDownMenu = styled.div`
	display: flex;
	margin-left: 18px;
	height: 100%;
`;

const Icon = styled.img`
	width: 25px;
	height: auto;
	cursor: pointer;
`;

const OptionsContainer = styled(motion.ul)`
	display: flex;
	position: absolute;
	background-color: rgba(255, 255, 255, 1);
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	list-style-type: none;
	margin-top: 0;
	margin-bottom: 0.4rem;
	padding: 0;
	z-index: 2;
	border-radius: 5px;
	width: 220px;

	&:after,
	&:before {
		bottom: 100%;
		left: 85%;
		border: solid transparent;
		content: ' ';
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}
	&:after {
		border-color: rgba(136, 183, 213, 0);
		border-bottom-color: #fff;
		border-width: 15px;
		margin-left: -30px;
	}
	&:before {
		border-bottom-color: rgba(200, 200, 200, 0.1);
		border-width: 16px;
		margin-left: -31px;
	}
`;

const OptionContainerArrow = styled(motion.div)`
	visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};
	position: absolute;
	width: 30px;
	height: 30px;
	left: 157px;
	top: -9px;
	transform: rotate(45deg);
	transition: visibility 1ms ease;
`;

const Option = styled(motion.li)`
	height: auto;
	padding: 0.5rem 0.5rem;
	user-select: none;
	overflow-wrap: break-wrap;
	text-decoration: none;
	font-size: 20px;
	width: 100%;

	&:hover {
		background-color: rgba(219, 219, 219, 0.3);
	}

	a {
		display: flex;
		width: 100%;
		text-decoration: none;
		color: black;
	}
`;

export default Dropdown;
