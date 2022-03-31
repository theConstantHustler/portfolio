import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const socials = () => {
	return (
		<div className="header__social">
			<a
				href="https://www.linkedin.com/in/gnishanth/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/theConstantHustler"
				target="_blank"
				rel="noreferrer"
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default socials;
