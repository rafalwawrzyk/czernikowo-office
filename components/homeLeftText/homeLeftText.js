import React from 'react'
import css from './styles.scss'
import Button from '../button/button'
import Subheader from '../subheader/subheader'
import styled from 'styled-components'


const Wrapper = styled.div`
width: 100%;
     height: 200px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     @media screen and (min-width:900px){
         align-items: baseline;
         width: 65%;
         justify-content: space-between;
         padding-left: 15px;
     }
     h2{
         margin: 0;
         padding-left: 7px;
         padding-right: 5px;
         font-size: 16px;
         text-align: center;
         @media screen and (min-width:400px){
             font-size:1.1rem;
         }
         @media screen and (min-width:550px){
             font-size:20px;
         }
         @media screen and (min-width:650px){
             font-size:27px;
         }
         @media screen and (min-width:900px){
             padding-left: 0;
         }
        }
`

const TextSecondary = styled.p`
    text-align: center;
         margin: 0;
         padding: 5px;
         @media screen and (min-width:650px){
             font-size:1.2rem
         }
         @media screen and (min-width:900px){
             text-align:left;
         }
`

const homeLeftText = (props) => (
    <Wrapper>
        <Subheader text={props.text}/>
            <TextSecondary>{props.textSecondary}</TextSecondary>
        <Button btnText={props.btnText} href={props.href}/>
    </Wrapper>
)


export default homeLeftText;