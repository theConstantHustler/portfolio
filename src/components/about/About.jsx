import React from 'react';
import Me from '../../assets/dp.png';
import { BiCodeAlt } from 'react-icons/bi';
import { IoSchoolOutline } from 'react-icons/io5';
import { GoLocation } from 'react-icons/go';
import './about.css';

const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<img src={Me} alt="myimage" />
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<BiCodeAlt className="icon" />
							<h5>Experience</h5>
							<small>4+ Years</small>
						</article>
						<article className="about__card">
							<IoSchoolOutline className="icon" />
							<h5>Graduation</h5>
							<small>2017</small>
						</article>
						<article className="about__card">
							<GoLocation className="icon" />
							<h5>Location</h5>
							<small>Mumbai</small>
						</article>
					</div>
					<p>
						"I'm ambitious, animated and a hustler. I'm determined
						towards my goal. I'm a fast learner and knowledge
						seeker, I'm in a pursuit to achieve things and improve
						my knowledge library. I'm a programmer by profession and
						I love my job. I love structure and order and I also
						stand for quality, I love spending time on fixing little
						details."
					</p>
					<a href="#contact" className="btn btn-primary">
						Lets Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
