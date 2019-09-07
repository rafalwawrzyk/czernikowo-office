import React from 'react';
import Title from '../title/title';
import Hero from '../hero/hero';
import {HeaderWrapper} from './style';





const Header = ({homeTitle, titlePartOne,titleColored,titleRest,img,homeImage}) => {
	return (
		<HeaderWrapper>
			<Title homeTitle={homeTitle} titlePartOne={titlePartOne} titleColored={titleColored} titleRest={titleRest} />
			<Hero img={img} homeImage={homeImage}/>
		</HeaderWrapper>
	);
};

export default Header;
