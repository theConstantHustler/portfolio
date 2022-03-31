import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
	return (
		<section id="contact">
			<h5>Get in touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<HiOutlineMail className="icon" />
						<h4>Email</h4>
						<h5>nishanth.gunupudi@gmail.com</h5>
						<a href="mailto:nishanth.gunupudi@gmail.com">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<FaWhatsapp className="icon" />
						<h4>Whatsapp</h4>
						<h5>+91 8960419062</h5>
						<a
							href="https://api.whatsapp.com/send?phone=+918960419062"
							target="_blank"
						>
							Send a message
						</a>
					</article>
				</div>
				<form onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="What do I call you?"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Where do I send Hi?"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Send me a message"
						required
					/>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

function sendEmail(e) {
	e.preventDefault();

	emailjs
		.sendForm(
			'service_c8slnvz',
			'template_813vqja',
			e.target,
			'user_vAC5TbfdBKGcTjpLMHfaD',
		)
		.then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			},
		);
	e.target.reset();
}

export default Contact;
