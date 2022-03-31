import React from 'react';
import './experience.css';
import { CgCheck } from 'react-icons/cg';

const Experience = () => {
	return (
		<section id="experience">
			<h5>The skills I have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>HTML</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>CSS</h4>
								<small>Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>Javascript</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>ReactJS</h4>
								<small>Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>Git</h4>
								<small>Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>React-Native</h4>
								<small>Beginner</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>NodeJS</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>Python</h4>
								<small>Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>Postgresql</h4>
								<small>Beginner</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>Serverless</h4>
								<small>Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>AWS</h4>
								<small>Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<CgCheck className="icon" />
							<div>
								<h4>Java</h4>
								<small>Intermediate</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
