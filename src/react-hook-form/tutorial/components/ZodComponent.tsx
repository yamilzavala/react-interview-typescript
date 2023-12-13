import React, {useEffect} from 'react';
import {useForm, useFieldArray, FieldErrors} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

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
const schema = z.object({
   username: z
        .string()
        .nonempty('Username required'),
   email: z
        .string()
        .nonempty('Email required')
        .email('Email not valid format'),
   channel: z
        .string()
        .nonempty('Channel required'),
})

const ZodComponent = () => {

    const form = useForm<FormValues>({
        defaultValues: initialValues,
        resolver: zodResolver(schema)
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

export default ZodComponent;