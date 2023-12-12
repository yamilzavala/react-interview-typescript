import React from 'react';
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

const initialValues: FormValues = {
    username: '',
    email: '',
    channel: '',
    social: {
        twitter: '',
        facebook: ''
    }
}

type FormValues = {
    username: string,
    email: string,
    channel: string,
    social: {
        twitter: string,
        facebook: string
    }
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
        }
    });
    const {
        register, 
        control, 
        handleSubmit,
        formState,
        setValue
    } = form;
    const {errors} = formState;   

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted: ', data)
       
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <input type="text" placeholder='twitter' {...register('social.twitter')} />

                    <label htmlFor="">Facebook</label>
                    <input type="text" placeholder='facebook' {...register('social.facebook')} />
                </div>

                <button>Submit</button>
            </form>

            <DevTool control={control}/>
        </div>
    );
};

export default YouTubeForm;