import React, { useState } from 'react';
//import portfolio from '../../assets/portfolio.png';
import portfolio from '../../assets/my-portfolio-splash.png';
import wip from '../../assets/wip.png';
import './projects.css';
// import Swiper core and required modules
/* eslint-disable no-unused-vars */
import { Pagination, Navigation } from 'swiper';
/* eslint-enable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	return (
		<section id="projects">
			<h5>Things I'm on</h5>
			<h2>My Projects</h2>

			<Swiper
				className="container projects__container"
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				<SwiperSlide className="project__item">
					<div className="rotation__card">
						<div
							className="inner__card"
							onClick={() => {
								setIsFlipped(!isFlipped);
								console.log('isFlipped', isFlipped);
							}}
							id={isFlipped ? 'is_flipped' : ''}
						>
							<div className="card project__image">
								<img src={portfolio} alt="" />
								<h5>click to know more</h5>
							</div>
							<div className="card project__description">
								<div className="project__tags">
									<button className="project__tag">
										HTML
									</button>
									<button className="project__tag">
										CSS
									</button>
									<button className="project__tag">
										ReactJS
									</button>
								</div>
							</div>
						</div>
					</div>
					<h3>Personal Portfolio website</h3>
					<div className="project__cta">
						<a
							href="https://github.com/theConstantHustler/portfolio"
							target="_blank"
							className="btn"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://nishanthgunupudi.com"
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
						>
							Live Demo
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide className="project__item">
					<div className="rotation__card">
						<div
							className="inner__card"
							onClick={() => {
								setIsFlipped(!isFlipped);
								console.log('isFlipped', isFlipped);
							}}
							id={isFlipped ? 'is_flipped' : ''}
						>
							<div className="card project__image">
								<img src={wip} alt="" />
								<h5>click to know more</h5>
							</div>
							<div className="card project__description">
								<div className="project__tags">
									<button className="project__tag">
										NodeJS
									</button>
									<button className="project__tag">
										Serverless
									</button>
									<button className="project__tag">
										ReactJS, React-Native
									</button>
								</div>
							</div>
						</div>
					</div>
					<h3>Jobe - storage solution</h3>
					<div className="project__cta">
						<a
							href="https://github.com"
							target="_blank"
							className="btn"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://github.com"
							target="_blank"
							className="btn btn-primary"
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Projects;
