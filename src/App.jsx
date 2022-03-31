import React from 'react';
import Header from './components/header/Header';
import FloatingNav from './components/navigation/FloatingNav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<FloatingNav />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
