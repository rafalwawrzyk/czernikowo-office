import React from 'react';
import Link from 'next/link';

import {Btn} from './style'

const Button = ({ bigger = false, href="/",...props }) => (
	<Link href={href}>
		<Btn bigger={bigger}>{props.btnText}</Btn>
	</Link>
);

export default Button;
