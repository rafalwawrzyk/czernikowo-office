import React from 'react';
import Hero from '../components/hero/hero';
import NavBar from '../components/navbar/navbar';
import ContactSubsection from '../components/contactSubsection/contactSubsection';
import Footer from '../components/footer/footer';
import Title from '../components/title/title';
import imgBg from '../static/preferences.svg';
import {AboutContainer} from './styles/about'

import AboutContent from '../components/aboutContent/aboutContent';
import Header from '../components/Header/header';

const infoTexts = [
	{
		text:
			'Posiadamy ponad dziesięcioletnie doświadczenie w obsłudze księgowej, kadrowej i prawniczej podmiotów gospodarczych',
		id: 1
	},
	{
		text:
			'Zapewniamy obsługę prawną we wszystkich dziedzinach prawa poprzez współpracę z wyspecjalizowanymi kancelariami prawniczymi',
		id: 2
	},
	{
		text: 'Klientów przyjmujemy w nowoczesnym obiekcie biurowym wyposażonym w najnowsze urządzenia techniczne',
		id: 3
	},
	{
		text: 'Każda oferta jest dostosowywana indywidualnie do potrzeb klienta',
		id: 4
	}
];



const About = () => {
	return (
		<AboutContainer>
			<Title titlePartOne="O nas słów " titleColored="kilka" />
			<Hero img={imgBg}/>
			<AboutContent />
			<ContactSubsection text="Skontaktuj się z nami" />
			<Footer />
		</AboutContainer>
	);
};

export default About;
