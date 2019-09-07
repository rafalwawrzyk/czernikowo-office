import React from 'react';
import HomeLeftText from '../homeLeftText/homeLeftText';
import HomeRight from '../homeRight/homeRight';
import { Wrapper } from './style';

const InfoRight = ({ href, text, btnText, img,textSecondary }) => (
	<Wrapper>
		<HomeLeftText href={href} text={text} btnText={btnText} textSecondary={textSecondary} />
		<HomeRight img={img} />
	</Wrapper>
);

export default InfoRight;
