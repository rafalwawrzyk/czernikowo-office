import React from 'react';
// import css from './styles.scss'
import Infotext from '../infoText/infoText'
import Spacer from '../spacer/spacer'
import {AboutContentContainer} from './style'



const infoTexts = [
    {
        text:'Posiadamy ponad dziesięcioletnie doświadczenie w obsłudze księgowej, kadrowej i prawniczej podmiotów gospodarczych',
        id:1
    },
    {
        text:'Zapewniamy obsługę prawną we wszystkich dziedzinach prawa poprzez współpracę z wyspecjalizowanymi kancelariami prawniczymi',
        id:2
    },
    {
        text:'Klientów przyjmujemy w nowoczesnym obiekcie biurowym wyposażonym w najnowsze urządzenia techniczne',
        id:3
    },
    {
        text:'Każda oferta jest dostosowywana indywidualnie do potrzeb klienta',
        id:4
    },

]


const AboutContent = () => {
    return(
       <AboutContentContainer>
            {   
                Object.keys(infoTexts).map((elem,i) => {
                    return(
                        i < infoTexts.length-1 ? (
                            <>
                        <Infotext infoText={infoTexts[elem]['text']}/>
                        <Spacer/>
                        </>
                        ) : 
                        (
                        <Infotext infoText={infoTexts[elem]['text']}/>
                        )
                    )
                })
            }
            </AboutContentContainer>
    )
}


export default AboutContent;