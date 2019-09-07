import React from 'react';
import { HeaderButton, Spacer, PageTitle, SubpageTitle, TextColored } from './style';
import Button from '../button/button';

const Title = ({ homeTitle = false, titlePartOne, titleColored, titleRest }) => {
	return (
		<div>
			{homeTitle ? (
				<PageTitle>
					<span>{titlePartOne}</span>
					{homeTitle ? <Spacer /> : null}
					<TextColored> {titleColored}</TextColored>
					<br />
					{titleRest}
				</PageTitle>
			) : (
				<SubpageTitle>
					<span>{titlePartOne}</span>
					{homeTitle ? <br /> : null}
					<TextColored> {titleColored}</TextColored>
					<br />
					{titleRest}
				</SubpageTitle>
			)}
			{homeTitle ? (
				<HeaderButton>
					<Button btnText="Sprawdź ofertę" bigger={true} href="/uslugi" />
				</HeaderButton>
			) : null}
		</div>
	);
};

export default Title;
