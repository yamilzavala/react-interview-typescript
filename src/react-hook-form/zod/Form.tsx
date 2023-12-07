import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const Tiers = [
    {
      id: "BRONZE",
      name: "Bronze",
      description: "Get average points",
      price: 0.99,
    },
    {
      id: "SILVER",
      name: "Silver",
      description: "Get extra points",
      price: 4.99,
    },
    {
      id: "GOLD",
      name: "Gold",
      description: "The highest possible tier",
      price: 19.99,
    },
  ];

//schema  
const FormSchema = z.object({
    email: z.string().email(),
    accept: z.literal(true, {
        errorMap: () => ({message: 'You must accept Terms and Conditions.'})
    }),
    tier: z
        .string({invalid_type_error: 'Please select a payment tier.'})
        .refine((value) => Tiers.map((tier) => tier.id).includes(value))
})

//type
type FormSchemaType = z.infer<typeof FormSchema>;

const Form = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: {errors, isSubmitting } 
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema)
    })

    const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
        await new Promise(async (resolve) => {
          await setTimeout(() => {
            console.log(data);
            resolve(undefined);
          }, 3000);
        });
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div>
                <label>Email</label>
                <input
                    type="text"
                    disabled={isSubmitting} 
                    {...register('email')}/>
                {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
            </div>

            <div>
                <input
                    type="checkbox"
                    disabled={isSubmitting} 
                    {...register('accept')}/>
                <span className="block ml-4">I accept the Terms of Service</span>
                {errors.accept && <span style={{color: 'red'}}>{errors.accept.message}</span>}
            </div>

            <div>
                <label>Payment tier</label>
                <ul>
                    {Tiers.map((tier, idx) => (
                        <li key={idx}>
                            <p>{tier.name}</p>
                            <p>{tier.description}</p>
                            <p>{tier.price.toLocaleString('en-US', {
                                currency: 'USD',
                                style: 'currency'
                            })}</p>
                            <input 
                                type='radio'
                                value={tier.id}
                                {...register('tier')} 
                                disabled={isSubmitting}/>
                        </li>
                    ))}
                </ul>
                {errors.tier && <span style={{color: 'red'}}>{errors.tier.message}</span>}
            </div>

            <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>
    );
};

export default Form;