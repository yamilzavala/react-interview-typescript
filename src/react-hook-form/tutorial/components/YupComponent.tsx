import React, {useEffect} from 'react';
import {useForm, useFieldArray, FieldErrors} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const initialValues: FormValues = {
    username: '',
    email: '',
    channel: ''   
}

type FormValues = {
    username: string,
    email: string,
    channel: string,   
}

//schema
const schema = yup.object({
    username: yup
        .string()
        .required('Username is required'),
    email: yup
        .string()
        .email('Email format is not valid')
        .required('Email is required'),
    channel: yup
        .string()
        .required('Channel is required'),
})

const YupComponent = () => {

    const form = useForm<FormValues>({
        defaultValues: initialValues,
        resolver: yupResolver(schema)
    });

    const {
        register, 
        control, 
        handleSubmit,
        formState,
        setValue,
        watch,
        getValues,
        reset,
        trigger
    } = form;

    const {errors, isDirty, touchedFields, dirtyFields, isValid, isSubmitting, isSubmitSuccessful, isSubmitted} = formState;   

  
    //Submit
    const onSubmit = (data: FormValues) => {
        console.log('Form submitted: ', data)       
    }

    return (
        <>
                <div className='container'>            
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* username */}
                    <label>Username</label>
                    <input type="text" {...register("username")} id="username"/>
                    {errors.username && <span className='error'>{errors.username.message}</span> }
    
                    {/* email */}
                    <label>Email</label>
                    <input type="email" {...register("email")} id="email"/>
                    {errors.email && <span className='error'>{errors.email.message}</span> }
    
                    {/* channel */}
                    <label>Channel</label>
                    <input type="text" {...register("channel")} id="channel"/>
                    {errors.channel && <span className='error'>{errors.channel.message}</span> }
                  
                    <button disabled={isSubmitting}>Submit</button>           
                </form>
    
                <DevTool control={control}/>
            </div>
        </>
        );
};

export default YupComponent;