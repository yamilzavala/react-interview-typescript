import React, {useEffect} from 'react';
import {useForm, useFieldArray, FieldErrors} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

const initialValues: FormValues = {
    username: '',
    email: '',
    channel: '',
    social: {
        twitter: '',
        facebook: ''
    },
    phoneNumbers: ['',''],
    phNumbers: [{number: ''}],
    age: 0,
    birthDate: new Date()

}

type FormValues = {
    username: string,
    email: string,
    channel: string,
    social: {
        twitter: string,
        facebook: string
    },
    phoneNumbers: string[],
    phNumbers: {
        number: string
    }[],
    age: number,
    birthDate: Date
}

const YouTubeForm = () => {

    const form = useForm<FormValues>({
        defaultValues: async () => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await resp.json();
            return {
                ...initialValues,
                email: data.email
            }
        },
        mode: 'onSubmit'
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

    const {fields, append, remove} = useFieldArray({
        name: 'phNumbers',
        control,
    })

    // const watchUserName = watch('username')
    // const watchUsernameAndEmail = watch(['username', 'email'])
    
    //Submit
    const onSubmit = (data: FormValues) => {
        console.log('Form submitted: ', data)       
    }

    //Errors
    const onError = (errors: FieldErrors<FormValues>) => {
        console.log('Errors: ', errors)
    }

    //watch all values from formState
    // useEffect(() => {
    //     const sub = watch((value) => {
    //         console.log('watch: ',value)
    //     })
    //     return () => sub.unsubscribe()
    // },[watch])

    //get values
    const handleGetValues = () => {
        console.log('get values: ', getValues(['username','social']))
    }

    //set value
    const handleSetValues = () => {
        setValue('username', '', {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful,reset])

    //global form state - dirty - touched 
    console.log('isDirty: ',isDirty, 'touchedFields: ',touchedFields, 'dirtyFields: ', dirtyFields)

    return (
        <>
            {/* <h2>username: {watchUserName}</h2>
            <h2>username and email: {watchUsernameAndEmail}</h2> */}
           

            <div className='container'>            
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    {/* username */}
                    <label>Username</label>
                    <input type="text" {...register("username", {
                        required: {
                            value: true,
                            message: "Username required"
                        }                    
                    })} id="username"/>
                    {errors.username && <span className='error'>{errors.username.message}</span> }
    
                    {/* email */}
                    <label>Email</label>
                    <input type="email" {...register("email", {
                        required: {value: true, message: 'Email required'},
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: 'Email invalid'
                        },
                        validate: {
                            notAdmin: (fieldValue) => {
                                return (
                                    fieldValue !== 'email@example.com' ||
                                    'Enter a different email'
                                )
                            },
                            notBlackListed: (fildValue) => {
                                return (
                                    !fildValue.endsWith('baddomain.com') ||
                                    'Domain is not sopported'
                                )
                            },
                            emailAvailable: async (value) => {
                                const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`)
                                const data = await res.json();
                                return data.length === 0 || 'Email already exists'
                            }
                        }
                    })} id="email"/>
                    {errors.email && <span className='error'>{errors.email.message}</span> }
    
                    {/* channel */}
                    <label>Channel</label>
                    <input type="text" {...register("channel", {
                        required: {
                            value: true,
                            message: 'Channel is required'
                        }
                    })} id="channel"/>
                    {errors.channel && <span className='error'>{errors.channel.message}</span> }
                    
                    {/* social media */}
                    <div>
                        <label htmlFor="">Twitter</label>
                        <input type="text" placeholder='twitter' {...register('social.twitter',{
                             required: {
                                value: true,
                                message: 'Twitter required'
                            }
                        })} />
                        {errors.social?.twitter && <span className='error'>{errors.social?.twitter.message}</span> }
    
                        <label htmlFor="">Facebook</label>
                        <input type="text" placeholder='facebook' {...register('social.facebook', {
                             required: {
                                value: true,
                                message: 'Facebook required'
                            }
                        })} />
                        {errors.social?.facebook && <span className='error'>{errors.social?.facebook.message}</span> }
                    </div>
    
                    {/* Phone number */}
                    <label htmlFor="">Primary number</label>
                    <input type="text" {...register('phoneNumbers.0',{
                        required: {
                            value: true,
                            message: 'Primary number required'
                        }
                    })}/>
                    
    
                    <label htmlFor="">Secondary number</label>
                    <input type="text" {...register('phoneNumbers.1',{
                        required: {
                            value: true,
                            message: 'Secondary number required'
                        }
                    })}/>
    
                    {/* Dinamic phone numbers */}
                    <div>
                        <label>List of phone numbers</label>
                        <div>
                            {fields.map((field, idx) =>{ 
                                return (
                                <div key={field.id}>
                                    <input type="text" {...register(`phNumbers.${idx}.number` as const)}/>
                                    {idx >= 0 && (
                                        <button type="button" onClick={() => remove(idx)}>
                                            Remove
                                        </button>
                                    )}
                                </div>                           
                                )
                            })}
                            <button type="button" onClick={() => append({number: ''})}>Add phone number</button>
                        </div>
                    </div>
    
                    {/* Age */}
                     <label>Age</label>
                    <input type="number" {...register("age", {
                        valueAsNumber: true,
                        required: {
                            value: true,
                            message: 'Age is required'
                        }
                    })} id="age"/>
                    {errors.age && <span className='error'>{errors.age.message}</span> }
    
                    {/* Birth Date */}
                     <label>Birth Date</label>
                    <input type="date" {...register("birthDate", {
                        valueAsDate: true,
                        required: {
                            value: true,
                            message: 'birthDate is required'
                        }
                    })} id="birthDate"/>
                    {errors.birthDate && <span className='error'>{errors.birthDate.message}</span> }
    
                    <button disabled={!isDirty || isSubmitting}>Submit</button>
                    <button type='button' onClick={handleGetValues}>Get values!</button>
                    <button type='button' onClick={handleSetValues}>Set values!</button>
                    <button type='button' onClick={() => reset()}>Reset!</button>
                    <button type='button' onClick={() => trigger('channel')}>Validate channel!</button>
                    <button type='button' onClick={() => trigger()}>Validate all!</button>
                </form>

    
                <DevTool control={control}/>
    
                
            </div>
        </>
        );
};

export default YouTubeForm;