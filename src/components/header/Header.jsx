import React from 'react';
import CTA from './CTA';
import me from '../../assets/shadow.jpeg';
import Socials from './Socials';
import ScrollDown from './ScrollDown';
import './header.css';

const Header = () => {
	return (
		<header id="home">
			<section className="container header__container">
				<h5>Hello I'm</h5>
				<h1> Nishanth Gunupudi</h1>
				<h5>Fullstack Developer</h5>
				<CTA />
				<Socials />
				<div className="me">
					<img src={me} alt="me" />
				</div>
				<ScrollDown />
			</section>
		</header>
	);
};

export default Header;
