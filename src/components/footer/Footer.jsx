import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href="#home" className="footer__logo">
				Nishanth Gunupudi
			</a>
			<div className="footer__social">
				<a
					href="https://linkledin.com"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin className="icon" />
				</a>
				<a href="https://github.com" target="_blank" rel="noreferrer">
					<BsGithub className="icon" />
				</a>
			</div>
			<div className="footer__copyright">© nishanth.gunupudi</div>
		</footer>
	);
};

export default Footer;
