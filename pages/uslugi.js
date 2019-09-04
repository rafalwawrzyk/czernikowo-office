import React from 'react';
import Hero from '../components/hero/hero'
import NavBar from '../components/navbar/navbar'
import ContactSubsection from '../components/contactSubsection/contactSubsection'
import Footer from '../components/footer/footer'
import Title from '../components/title/title'
import imgBg from '../static/undraw_pie_graph_x9dy.svg'
import ServicesContent from '../components/servicesContent/servicesContent'
import styled from 'styled-components'


const ServicesContainer = styled.div`
     margin-top: 100px;
		width: 95%;
		margin-left: auto;
		margin-right: auto;
    @media screen and (min-width:900px) {
        margin-top: 150px;
    }
`


const Uslugi = () => {
    return(
        <ServicesContainer>
            <Title titlePartOne="Czym się " titleColored="zajmujemy" />
			<Hero img={imgBg}/>
            <ServicesContent/>
            <ContactSubsection text="Skontaktuj się z nami"/>
            <Footer/>
        </ServicesContainer>
    )
}


export default Uslugi;