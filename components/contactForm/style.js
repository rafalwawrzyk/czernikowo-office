import styled from 'styled-components';
import {Form as Formik, Field} from 'formik';


export const Form = styled(Formik)`
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
             vertical-align:top;
         }
        }
`
export const Input = styled(Field)`
    height: 40px;
    &:focus{
        outline: none;
    }  
`

export const Textarea = styled(Field)`
        padding:10px 0 100px 10px !important;
         @media screen and (min-width:550px){
            padding:10px 0 180px 10px !important;
         }
    &:focus{
        outline: none;
    }     
`