import React from 'react'
import css from './styles.scss'
import styled from 'styled-components';

const contactInfo = [
    {
        header:'Adres',
        text:'87-640 Czernikowo, ul. Leśna 1A',
        id:1
    },
    {
        header:'Tel./Fax ',
        text:'54 288 92 22 502 505 828',
        id:2
    },
    {
        header:'Email',
        text:'kancelaria@kpfczernikowo.eu',
        id:3
    }
]

const ContactInfoElem = styled.div`
    text-align: center;
`

const ContactHeader = styled.h2`
    color: #FF6734;
    font-size:20px;
    @media screen and (min-width:650px) {
        font-size:27px;
    }
`


const ContactInfoWrapper = styled.div`
    color: #FF6734;
    margin: 50px 0;
     @media screen and (min-width:900px) {
         width: 50%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         h2{
             text-align: center;
             margin: 0;
             text-align:left;
         }
 	}
`

const ContactText = styled.p`
    font-size:16px;
    @media screen and (min-width:900px) {
        font-size:1.2rem;
        text-align:left;
    }
`




const ContactContent = () => {
    return(
        <ContactInfoWrapper>
            {
                Object.keys(contactInfo).map((elem,i) => {
                    return(
                        <ContactInfoElem>
                            <ContactHeader>{contactInfo[elem]['header']}</ContactHeader>
                            <ContactText>{contactInfo[elem]['text']}</ContactText>
                        </ContactInfoElem>
                    )
                })
            }
            {/* <div className={css.contactInfoElem}>
                <h2 className={css.contactHeader}>Adres</h2>
                <p>87-640 Czernikowo, ul. Leśna 1A</p>
            </div> */}
        </ContactInfoWrapper>
    )
}



export default ContactContent;