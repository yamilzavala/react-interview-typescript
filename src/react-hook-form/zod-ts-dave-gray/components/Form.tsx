import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchemaWithAddress } from '../models/User';
import type { UserWithAddress } from '../models/User';

const Form = () => {
    const {
        register,
        handleSubmit,
        trigger,
        formState: {errors, isValid}
    } = useForm<UserWithAddress>({
        resolver: zodResolver(UserSchemaWithAddress)
    })

    const onSubmit: SubmitHandler<UserWithAddress> = (data) => {
       console.log(data)
    }

    console.log(isValid)

    return (
        <>
            <button onClick={() => trigger()}>Display data requirements</button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input id='name' type="text" placeholder="Name" {...register('name')}/>
                {errors.name && <p style={{color: 'red'}}>{errors.name?.message}</p>}

                <label htmlFor="username">UserName:</label>
                <input id='username' type="text" placeholder="UserName" {...register('username')}/>
                {errors.username && <p style={{color: 'red'}}>{errors.username?.message}</p>}
            
                <label htmlFor="email">Email:</label>
                <input id='email' type="email" placeholder="email" {...register('email')}/>
                {errors.email && <p style={{color: 'red'}}>{errors.email?.message}</p>}

                <label htmlFor="street">Street:</label>
                <input id='street' type="text" placeholder="street" {...register('address.street')}/>
                {errors?.address?.street && <p style={{color: 'red'}}>{errors.address.street?.message}</p>}

                <label htmlFor="suite"> Suite/Apt:</label>
                <input id="suite" type="text" {...register("address.suite")} placeholder="212 B"/>
                {errors?.address?.suite && <p style={{color: 'red'}}> {errors.address.suite?.message}</p>}

                <label htmlFor="city">City:</label>
                <input id="city" type="text" {...register("address.city")} placeholder="Kansas City"/>
                {errors?.address?.city && <p style={{color: 'red'}}> {errors.address.city?.message}</p>}

                <label htmlFor="zipcode">
                    Zip Code:
                </label>
                <input id="zipcode" type="text" {...register("address.zipcode")} placeholder="55555-1234"/>
                {errors?.address?.zipcode &&
                    <p style={{color: 'red'}}>
                        {errors.address.zipcode?.message}
                    </p>}

                <label htmlFor="phone">  Phone: </label>
                <input type="tel" {...register("phone")}                    
                    placeholder="555-555-5555"
                />
                {errors.phone &&
                    <p style={{color: 'red'}}>
                        {errors.phone?.message}
                    </p>}

                <label htmlFor="website"> Website: </label>
                <input id="website" type="text" {...register("website")}
                    placeholder="https://your-website.com"
                />
                {errors.website &&
                    <p style={{color: 'red'}}>
                        {errors.website?.message}
                    </p>}

                <label htmlFor="company-name" >Company Name: </label>
                <input id="company-name" type="text" {...register("company.name")}                    
                    placeholder="Acme Co."
                />
                {errors?.company?.name &&
                    <p style={{color: 'red'}}>
                        {errors.company.name?.message}
                    </p>}

                <label htmlFor="company-slogan"> Company Slogan: </label>
                <input id="company-slogan" type="text" {...register("company.catchPhrase")}                   
                    placeholder="Coyote's One Stop Shop"
                />
                {errors?.company?.catchPhrase &&
                    <p style={{color: 'red'}}>
                        {errors.company.catchPhrase?.message}
                    </p>}

                <button type="submit">
                    Submit
                </button>

            </form>
        </>
    );
};

export default Form;