import React, { useState } from 'react';
import './nav.css';
import { GoHome } from 'react-icons/go';
import { BiUser } from 'react-icons/bi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';

const FloatingNav = () => {
	const [isActive, setIsActive] = useState('#home');
	return (
		<nav>
			<a
				href="#home"
				onClick={() => {
					setIsActive('#home');
				}}
				className={isActive === '#home' ? 'active' : ''}
			>
				<GoHome />
			</a>
			<a
				href="#about"
				onClick={() => {
					setIsActive('#about');
				}}
				className={isActive === '#about' ? 'active' : ''}
			>
				<BiUser />
			</a>
			<a
				href="#experience"
				onClick={() => {
					setIsActive('#experience');
				}}
				className={isActive === '#experience' ? 'active' : ''}
			>
				<MdOutlineWorkOutline />
			</a>
			<a
				href="#projects"
				onClick={() => {
					setIsActive('#projects');
				}}
				className={isActive === '#projects' ? 'active' : ''}
			>
				<FaReact />
			</a>
			<a
				href="#contact"
				onClick={() => {
					setIsActive('#contact');
				}}
				className={isActive === '#contact' ? 'active' : ''}
			>
				<TiMessages />
			</a>
		</nav>
	);
};

export default FloatingNav;
