import styled from 'styled-components'

export const ContactInfoElem = styled.div`
text-align: center;
`

export const ContactHeader = styled.h2`
color: #FF6734;
font-size:20px;
@media screen and (min-width:650px) {
    font-size:27px;
}
`


export const ContactInfoWrapper = styled.div`
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

export const ContactText = styled.p`
font-size:16px;
@media screen and (min-width:900px) {
    font-size:1.2rem;
    text-align:left;
}
`
