import React,{useState} from 'react';
import {
    Form,
    Input,
    Textarea,
    ErrorMessage 
} from './style';
import Button from '../button/button';
import {withFormik} from 'formik';
import * as yup from 'yup';
import Loader from '../loader/loader';
import Greetings from '../greetings/greetings'



const ContactForm = ({values,errors,touched,isSubmitting,...props}) => {

    if(!isSubmitting){
        return(
            <Form>
                    <>
                    <Input 
                    type="text" 
                    name="name" 
                    placeholder="Imię"
                    border={(errors.name && touched.name) && "2px solid red"}
                    color={(errors.name && touched.name) && "red"}

                    />
                    {errors.name && touched.name && <ErrorMessage>! {errors.name}</ErrorMessage> }
                    </>
            
                    <>
                    <Input 
                    type="email" 
                    name="email" 
                    required="required" 
                    placeholder="Email"
                    border={(errors.email && touched.email) && '2px solid red'}
                    color={(errors.email && touched.email) && 'red'}
                    />
                    {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage> }
    
                    </>
                    <>
                    <Textarea 
                    name="message" 
                    rows="5" 
                    cols="33" 
                    placeholder="Wiadomość"
                    border={(errors.message && touched.message) && '2px solid red'}
                    color={(errors.message && touched.message) && 'red'}
                    />
                    {errors.message && touched.message && <ErrorMessage>{errors.message}</ErrorMessage> }
                    </>
    
                    <Button 
                    btnText="Wyślij"
                    formButton={true}        
                    />
                </Form>
        )
    }
    return <Greetings text="Dziękujemy za kontakt"/>
   
}
        

const FormikForm = withFormik({
    mapPropsToValues(){
        return {
            name:'',
            email:'',
            message:''
        }
    },
    validationSchema:yup.object().shape({
        name:yup.string().required('Proszę wpisać imię'),
        email:yup.string().email('Niepoprawny email').min(5,'email musi mieć przynajmniej 5 znaków').required('Proszę wpisać email'),
        message:yup.string().min(5, 'Wiadmość musi zawierać minimum 5 znaków').required('Proszę wpisać wiadomość')
    }),
    handleSubmit(values){
        console.log('from front',values);
        fetch('/api/contact', {
            method:'post',
            headers:{
                'Accept':'application/json, text/plan,*/*',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then((res) => {
            res.status === 200 ? console.log(res) : console.log('Error')
        })
    }
})(ContactForm)

export default FormikForm;