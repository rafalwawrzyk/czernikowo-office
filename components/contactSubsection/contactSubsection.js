import React from 'react';
import Subheader from '../subheader/subheader'
import Button from '../button/button'
import {ContactSubsectionWrapper,
    Form,
    Input,
    Textarea } from './style'


const contactSubsection = (props) => {
    return(
        <ContactSubsectionWrapper> 
            <Subheader text={props.text} subheaderCentered={true}/>
            <Form>
                <Input type="text" name="name" required="required" placeholder="Imię"/>
                <Input type="email" name="email" required="required" placeholder="Email"/>
                <Textarea name="message" rows="5" cols="33" placeholder="Wiadomość"></Textarea>
                <Button type="submit" btnText="Wyślij"/>
            </Form>
        </ContactSubsectionWrapper>
    )
}



export default contactSubsection;