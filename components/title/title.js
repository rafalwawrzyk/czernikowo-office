import React from 'react'
import css from './styles.scss'
import Button from '../button/button'
import styled from 'styled-components';



const HeaderButton = styled.div`
    display: none;
 	@media screen and (min-width: 1300px) {
 		display: block;
 		position: absolute;
 		top: 70%;
 		width: 100%;
 		button {
 			height: 50px;
 			font-size: 16px;
 		}
 	}
`

const Spacer = styled.br`
    display:none;
    @media screen and (min-width: 1000px) {
        display:block;
    }
`

const PageTitle = styled.h1`
 	font-size: 19px;
 	font-family: 'Montserrat', sans-serif;
    margin: 0;
    color:#525252;
 	@media screen and (min-width: 450px) {
 		font-size: 25px;
 		text-align: left;
 	}
 	@media screen and (min-width: 650px) {
 		font-size: 35px;
     }
     
     @media screen and (min-width: 750px) {
 		font-size: 42px;
 	}
 	@media screen and (min-width: 1000px) {
 		font-size: 60px;
 	}
 	/* @media screen and (min-width: 900px) {
 		font-size: 60px;
         position: absolute;
         margin-top:0;
 		top: 40%;
 		-webkit-transform: translateY(-50%);
 		-moz-transform: translateY(-50%);
 		-ms-transform: translateY(-50%);
 		-o-transform: translateY(-50%);
 	} */
 	@media screen and (min-width: 1000px) {
 		font-size: 63px;
 	}
 	@media screen and (min-width: 1100px) {
 		font-size: 74px;
 	}
 	@media screen and (min-width: 1300px) {
         font-size: 85px;
         position: absolute;
         margin-top:0;
 		top: 40%;
 		-webkit-transform: translateY(-50%);
 		-moz-transform: translateY(-50%);
 		-ms-transform: translateY(-50%);
 		-o-transform: translateY(-50%);
 	}
 	@media screen and (min-width: 1400px) {
 		font-size: 93px;
 	}
 	@media screen and (min-width: 1600px) {
 		font-size: 112px;
 	}
 	@media screen and (min-width: 1920px) {
 		font-size: 115px;
 	}
`

const SubpageTitle = styled(PageTitle)`
    @media screen and (min-width:900px) {
 		position: static;
 		transform: none;
 		-webkit-transform: none;
 		-moz-transform: none;
 		-ms-transform: none;
 		-o-transform: none;
 	}

 	@media screen and (min-width: 1200px) {
         font-size:75px;
 	}
`

const TextColored = styled.span`
    color: #ff6734;
`


const Title = ({homeTitle=false,...props}) => {
    return(
        <div className={css.wrapper}>
            {homeTitle ? 
            <PageTitle>
                <span>{props.titlePartOne}</span>
                {homeTitle ? <Spacer/> : null}
                <TextColored> {props.titleColored}</TextColored>
                <br/>
                {props.titleRest} 
                
            </PageTitle> : 
            <SubpageTitle>
                <span>{props.titlePartOne}</span>
                {homeTitle ? <br/> : null}
                <TextColored> {props.titleColored}</TextColored>
                <br/>
                {props.titleRest} 
            </SubpageTitle>}
            {/* <h1 className={homeTitle ? css.pageTitle : css.subpageTitle} >
                <span>{props.titlePartOne}</span>
                {homeTitle ? <br/> : null}
                <TextColored> {props.titleColored}</TextColored>
                <br/>
                {props.titleRest} 
            </h1> */}
            {homeTitle ? <HeaderButton>
                <Button btnText="Sprawdź ofertę" bigger={true} href="/uslugi"/>
            </HeaderButton> : null}
        </div>
    )
}


export default Title;