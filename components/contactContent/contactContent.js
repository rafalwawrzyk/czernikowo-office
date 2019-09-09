import React from 'react';
import { ContactInfoElem, ContactHeader, ContactInfoWrapper, ContactText } from './style';

const contactInfo = [
	{
		header: 'Adres',
		text: '87-640 Czernikowo, ul. Leśna 1A',
		id: 1
	},
	{
		header: 'Tel./Fax ',
		text: '54 288 92 22 ',
		id: 2
	},
	{
		header: 'Kom.',
		text: '502 505 828',
		id: 3
	},
	{
		header: 'Email',
		text: 'kancelaria@kpfczernikowo.eu',
		id: 4
	}
];

const ContactContent = () => {
	return (
		<ContactInfoWrapper>
			{Object.keys(contactInfo).map((elem, i) => {
				return (
					<ContactInfoElem>
						<ContactHeader>{contactInfo[elem]['header']}</ContactHeader>
						<ContactText>{contactInfo[elem]['text']}</ContactText>
					</ContactInfoElem>
				);
			})}
		</ContactInfoWrapper>
	);
};

export default ContactContent;
