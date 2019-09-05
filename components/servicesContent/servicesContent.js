import React from 'react';
import SubHeader from '../subheader/subheader'
import {DashedList,
    ServicesContainer} from './style'

const infoTexts = [
    {
        header:'Outsourcing usług księgowych:',
        serviceDetails:[
            {
                text:"usługi księgowe zgodnie z Ustawą o rachunkowości",
                id:1
            },
            {
                text:"deklaracje podatkowe, GUS",
                id:2
            },
            {
                text:"sprawozdania finansowe",
                id:3
            },
            {
                text:"reprezentowanie Klienta przed organami podatkowymi",
                id:4
            },
        ],
        id:1
    },
    {
        header:'Outsourcing kadrowo-płacowy:',
        serviceDetails:[
            {
                text:"ewidencja danych kadrowych w systemach kadrowo-płacowych",
                id:1
            },
            {
                text:"sporządzanie listy płac",
                id:2
            },
            {
                text:"naliczanie wynagrodzeń",
                id:3
            },
            {
                text:"obsługa procesu zatrudnienia pracownika",
                id:4
            },
            {
                text:"zgłaszanie pracowników do ZUS",
                id:5
            },
            {
                text:"kalkulacja zobowiązań publicznoprawnych związanych z wynagrodzeniami",
                id:6
            },
            {
                text:"deklaracje ZUS i PFRON",
                id:7
            },
            {
                text:"wystawianie zaświadczeń o wynagrodzeniach, zarobkach, świadectw pracy",
                id:8
            },
            {
                text:"sporządzanie PIT 11, PIT 40, PIT 4R, PIT 8AR, ZUS IWA",
                id:9
            },
            {
                text:"prowadzenie i administrowanie teczek osobowych pracowników",
                id:10
            },
            {
                text:"monitorowanie ważności badań lekarskich i szkoleń BHP",
                id:11
            },
            {
                text:"prowadzenie ewidencji urlopowej",
                id:12
            },
            {
                text:"reprezentowanie Klienta w kontrolach organów państwowych",
                id:13
            },
            {
                text:"raportowanie zgodnie z wymaganiami Klienta",
                id:14
            },
        ],
        id:2
    },
    {
        header:'Doradztwo prawno-podatkowe:',
        serviceDetails:[
            {
                text:"rozwiązywanie problemów podatkowych",
                id:1
            },
            {
                text:"optymalizacja podatkowa",
                id:2
            },
            {
                text:"konsultacje związane z wdrożeniem najlepszych rozwiązań",
                id:3
            },
            {
                text:"interpretacja zdarzeń gospodarczych w firmie Klienta pod kątem podatkowym",
                id:4
            },
        ],
        id:3
    },
    {
        header:'a także:',
        serviceDetails:[
            {
                text:"rejestracja przedsiębiorstw",
                id:1
            },
            {
                text:"wsparcie prawno-podatkowe przy rejestracji przedsiębiorstwa",
                id:2
            },
            {
                text:"sprawdzanie dokumentów pod względem formalnym i rachunkowym",
                id:3
            },
            {
                text:"rozliczanie VAT w rolnictwie",
                id:4
            },
            {
                text:"pomoc w założeniu firmy",
                id:5
            },
            {
                text:"pomoc w uzyskaniu dotacji z Urzędu Pracy i jej rozlcizenie",
                id:6
            },
            {
                text:"pełen zakres ubezpieczeń (komunikacyjne, majątkowe, rolnicze, na życie itp.)",
                id:7
            },
        ],
        id:4
    },

]



const ServicesContent = () => {
    return(
        <ServicesContainer>
        {   
            Object.keys(infoTexts).map((elem,i) => {
                return(
                    <div key={infoTexts[elem]['id']}>
                    <SubHeader text={infoTexts[elem]['header']}/>
                    <DashedList>
                        {infoTexts[elem]['serviceDetails'].map((elem,i)=>{
                            return(
                                <li key={elem.id}>{elem.text}</li>
                            )
                        })}
                    </DashedList>
                    </div>
                )
            })
        }
        </ServicesContainer>
    )
}


export default ServicesContent;