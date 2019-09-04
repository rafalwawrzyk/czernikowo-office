import React from 'react';
import Subheader from '../subheader/subheader'
import Button from '../button/button'
import styled from 'styled-components'


const ContactSubsectionWrapper = styled.div`
    max-width: 600px;
     margin-left: auto;
     margin-right: auto;
     margin-top: 50px;
`

const Form = styled.form`
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     input, textarea{
         width:90%;
         box-sizing: border-box;
         margin: 5px;
         border: none;
         padding:10px;
         border: 1px solid #FF6734;
         border-radius:3px;
         -webkit-border-radius:3px;
         -moz-border-radius:3px;
         -ms-border-radius:3px;
         -o-border-radius:3px;
         &::placeholder{
             color:#ababab;
         }
        }
`
const Input = styled.input`
    height: 40px;
    &:focus{
        outline: none;
    }  
`

const Textarea = styled.textarea`
    height:105px;
         @media screen and (min-width:550px){
             height:190px;
         }
    &:focus{
        outline: none;
    }     
`


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