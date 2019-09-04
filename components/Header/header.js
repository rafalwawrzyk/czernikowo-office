import React from 'react';
import Title from '../title/title';
import Hero from '../hero/hero';
import css from './styles.scss';
import styled from 'styled-components'

// .headerWrapper {
//     position: relative;
//     padding: 50px;
// 	@media screen and (min-width: $break-md2) {
//         height: 100vh;
//         padding: 0px;
//     }
//     @media screen and (min-width: $break-lg5) {
//         max-width: 1920px;
//         margin-left: auto;
//         margin-right: auto;
// 	}
// }

const HeaderWrapper = styled.div`
	position: relative;
	 /* padding: 50px; */
	 margin-top:100px;
 	@media screen and (min-width:900px) {
         padding: 0px;
	 }
	 @media screen and (min-width:1300px) {
		 height: 100vh;
		 margin-top:0;
     }
     @media screen and (min-width:1920px) {
         max-width: 1920px;
         margin-left: auto;
        margin-right: auto;
 	}
`



const Header = (props) => {
	return (
		<HeaderWrapper>
			<Title homeTitle={props.homeTitle} titlePartOne={props.titlePartOne} titleColored={props.titleColored} titleRest={props.titleRest} />
			<Hero img={props.img} homeImage={props.homeImage}/>
		</HeaderWrapper>
	);
};

export default Header;
