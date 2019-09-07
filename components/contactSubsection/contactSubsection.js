import React from 'react';
import Subheader from '../subheader/subheader';
import FormikForm from '../contactForm/contactForm';
import {ContactSubsectionWrapper} from './style'


const contactSubsection = ({text}) => {
    return(
        <ContactSubsectionWrapper> 
            <Subheader text={text} subheaderCentered={true}/>
            <FormikForm/>
        </ContactSubsectionWrapper>
    )
}




export default contactSubsection;