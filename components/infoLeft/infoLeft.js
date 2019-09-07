import React from 'react';
import HomeLeftText from '../homeLeftText/homeLeftText';
import HomeRight from '../homeRight/homeRight';
import { Wrapper } from './style.js';

const InfoLeft = ({ img, href, text, btnText, textSecondary }) => (
	<Wrapper>
		<HomeRight img={img} />
		<HomeLeftText href={href} text={text} btnText={btnText} textSecondary={textSecondary} />
	</Wrapper>
);

export default InfoLeft;
