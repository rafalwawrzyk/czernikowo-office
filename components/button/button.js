import React from 'react';
import css from './styles.scss';
import styled from 'styled-components';
import Link from 'next/link';

const Btn = styled.button`
	width: 30%;
	height: 30px;
	border-radius: 5px;
	border: none;
	text-decoration: none;
	color: #ff6734;
	background-color: #fff;
	margin-top: 10px;
	margin-left: 7px;
	font-size: 11px;
	max-width: 105px;
	border: 1px solid;
	transition: 0.25s;
	&:hover,
	&:focus {
		box-shadow: 0 0.4em 0.5em -0.4em #ff6734;
		transform: translateY(-0.25em);
	}

	@media screen and (min-width: 550px) {
		height: 40px;
		max-width: 135px;
	}

	@media screen and (min-width: 900px) {
		${({ bigger }) =>
			bigger &&
			`
        display: none;
        @media screen and (min-width:900px){
            max-width: 490px;
            display: block;
        }
        `};
	}
	&:hover {
		cursor: pointer;
	}
`;

const Button = ({ bigger = false, href="/",...props }) => (
	<Link href={href}>
		<Btn bigger={bigger}>{props.btnText}</Btn>
	</Link>
);

export default Button;
