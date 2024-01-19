import React, {useRef, ComponentPropsWithoutRef, useImperativeHandle, forwardRef } from 'react';

type TFormProps = ComponentPropsWithoutRef<'form'> & {
    onSave:(data: unknown) => void
}

export type TRefProps = {
    clear:() => void
}

const Form = forwardRef<TRefProps, TFormProps>(({children, onSave, ...props}: TFormProps, ref) => {
    const formRef = useRef<HTMLFormElement>(null)

    //expose an api to parent component
    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('CLEAR')
                formRef.current?.reset()
            }
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

       const formData = new FormData(e.currentTarget)
       const data = Object.fromEntries(formData)
       onSave(data)
       //formRef.current?.reset();
    }

    return (
        <form onSubmit={handleSubmit} {...props} ref={formRef}>
            {children}
        </form>
    );
});

export default Form;