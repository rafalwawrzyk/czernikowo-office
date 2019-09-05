import React from 'react';
import Hero from '../components/hero/hero';
import ContactSubsection from '../components/contactSubsection/contactSubsection';
import Footer from '../components/footer/footer';
import Title from '../components/title/title';
import imgBg from '../static/business.svg';
import ContactContent from '../components/contactContent/contactContent';
import dynamic from 'next/dynamic';
import { ContactContainer, ContentContainer } from './styles/contact';

const DynamicComponentWithCustomLoading = dynamic(() => import('../components/map/map'), {
	ssr: false
});

const Contact = () => {
	return (
		<ContactContainer>
			<div>
				<Title titlePartOne="Kontakt " titleColored="z nami" />
				<Hero img={imgBg} />
			</div>
			<ContentContainer>
				<ContactContent />
				<DynamicComponentWithCustomLoading />
			</ContentContainer>
			<ContactSubsection text="Skontaktuj się z nami" />
			<Footer />
		</ContactContainer>
	);
};

export default Contact;
