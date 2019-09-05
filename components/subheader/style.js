import styled from 'styled-components';

export const SubheaderTitle = styled.h2`
	font-size: 16px;
	text-align: center;
	@media screen and (min-width: 400px) {
		font-size: 1.1rem;
	}
	@media screen and (min-width: 550px) {
		font-size: 20px;
	}
	@media screen and (min-width: 650px) {
		font-size: 27px;
	}
	@media screen and (min-width: 900px) {
		text-align: left;
	}
`;

export const SubheaderCentered = styled.h2`text-align: center;`;

export const SubheaderSpan = styled.span`color: #ff6734;`;
