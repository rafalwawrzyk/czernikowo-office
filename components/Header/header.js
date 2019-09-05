import React from 'react';
import Title from '../title/title';
import Hero from '../hero/hero';
import {HeaderWrapper} from './style';





const Header = (props) => {
	return (
		<HeaderWrapper>
			<Title homeTitle={props.homeTitle} titlePartOne={props.titlePartOne} titleColored={props.titleColored} titleRest={props.titleRest} />
			<Hero img={props.img} homeImage={props.homeImage}/>
		</HeaderWrapper>
	);
};

export default Header;
