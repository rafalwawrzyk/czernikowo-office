import React from 'react';
import Hero from '../components/hero/hero';
import NavBar from '../components/navbar/navbar';
import ContactSubsection from '../components/contactSubsection/contactSubsection';
import Footer from '../components/footer/footer';
import Title from '../components/title/title';
import imgBg from '../static/business.svg';
import ContactContent from '../components/contactContent/contactContent';
import LeafletMap from '../components/map/map';
import dynamic from 'next/dynamic';
import css from './contact.scss';
import styled from 'styled-components'


const ContactContainer = styled.div`
	margin-top: 100px;
	width: 95%;
	margin-left: auto;
	margin-right: auto;
	@media screen and (min-width:900px) {
		margin-top: 150px;
	}
`

const ContentContainer = styled.div`
	 	@media screen and (min-width:900px) {
 		display: flex;
 		width: 100%;
 		max-width: 1000px;
 		margin-left: auto;
		 margin-right: auto;
		 align-items:center;
 	}
`

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
