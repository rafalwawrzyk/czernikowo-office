import React, { useEffect, useState } from 'react';
import heroMain from '../static/multitask.svg';
import udraw from '../static/preferences.svg';
import InfoRight from '../components/infoRight/infoRight';
import InfoLeft from '../components/infoLeft/infoLeft';
import udrawpie from '../static/undraw_pie_graph_x9dy.svg';
import udrawbusiness from '../static/business.svg';
import ContactSubsection from '../components/contactSubsection/contactSubsection';
import Footer from '../components/footer/footer';
import Header from '../components/Header/header';
import {HomeWrapper} from './styles/home'


const Home = () => {
	{console.log('rendered')}

	return (
		<HomeWrapper>
			<Header
				img={heroMain}
				titlePartOne="Kancelaria"
				titleColored="Prawno-Finansowa "
				titleRest="Beata Murszewska"
				homeTitle={true}
				homeImage={true}
			/>
			<InfoRight
				img={udraw}
				text="Kim jesteśmy"
				btnText="O nas"
				href="/onas"
				textSecondary="Sprawdź
                dlaczego zaufało nam setki 
                klientów oraz jakie doświadczenie posiadamy"
				normalText="sss"
				lastWord="sasasa"
			/>
			<InfoLeft
				img={udrawpie}
				text="Co robimy"
				btnText="Usługi"
				href="/uslugi"
				textSecondary="Bardzo szeroka paleta usług 
               dostosowywana bezpośrednio pod klienta. 
               Każdą sprawę rozpatrujemy indywidulanie"
				normalText="sss"
				lastWord="sasasa"
			/>
			<InfoRight
				img={udrawbusiness}
				text="Skontaktuj się"
				btnText="Kontakt"
				href="/kontakt"
				normalText="sss"
				lastWord="sasasa"
				textSecondary="Podczas miłej rozmowy ustalimy warunki współpracy jak najkorzystniejsze dla Ciebie i twojej firmy"
			/>
			<ContactSubsection text="Szybki Kontakt" />
			<Footer />
		</HomeWrapper>
	);
};

export default Home;
