import React from 'react';
import Link from 'next/link';

import { Btn } from './style';

const Button = ({ bigger = false, formButton = false, href = '/', btnText }) => {
	return (
		<>
		{!formButton ? 	<Link href={href}>
			<Btn bigger={bigger} >{btnText}</Btn>
		</Link> : <Btn bigger={bigger}>{btnText}</Btn>}
		</>
	
	);
};

export default Button;
