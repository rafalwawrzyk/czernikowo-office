import React from 'react';
import {
    Form,
    Input,
    Textarea } from './style';
import Button from '../button/button';
import {withFormik} from 'formik';
import * as yup from 'yup';
 



const ContactForm = ({
    values,
    errors,
    touched
}) => (
        <Form>
                <>
                {touched.name && errors.name && <p>{errors.name}</p> }
                <Input 
                type="text" 
                name="name" 
                placeholder="Imię"
                />
                </>
        
                <>
                {touched.email && errors.email && <p>{errors.email}</p> }
                <Input 
                type="email" 
                name="email" 
                required="required" 
                placeholder="Email"
                />
                </>
                <>
                {touched.message && errors.message && <p>{errors.message}</p> }
                <Textarea 
                name="message" 
                rows="5" 
                cols="33" 
                placeholder="Wiadomość"
                />
                </>

                <Button 
                btnText="Wyślij"
                formButton={true}        
                />
            </Form>
)


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
        console.log(values)
    }
})(ContactForm)

export default FormikForm;