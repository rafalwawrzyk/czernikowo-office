import styled from 'styled-components';
import { Form as Formik, Field } from 'formik';

export const Form = styled(Formik)`
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     input, textarea{
         width:90%;
         box-sizing: border-box;
         margin: 5px;
         padding:10px;
         border-radius:3px;
         -webkit-border-radius:3px;
         -moz-border-radius:3px;
         -ms-border-radius:3px;
         -o-border-radius:3px;
         
         &::placeholder{
             vertical-align:top;
         }
        }
`;
export const Input = styled(Field)`
    height: 40px;
    border: ${(props) => props.border || '1px solid #FF6734'};
    &:focus{
        outline: none;
    }
             
    &::placeholder{
        color:${(props) => props.color || '#ababab'};
    }  
`;

export const Textarea = styled(Field)`
        padding:10px 0 100px 10px !important;
        border: ${(props) => props.border || '1px solid #FF6734'};
         @media screen and (min-width:550px){
            padding:10px 0 180px 10px !important;
         }
    &:focus{
        outline: none;
    }
    &::placeholder{
        color:${(props) => props.color || '#ababab'};
    }       
`;

export const ErrorMessage = styled.p`
	color: #ff0000;
	font-weight: 600;
`;
