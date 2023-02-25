import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    let confirmPassword = useRef()
    let submit_data = (data)=>{
       if (confirmPassword.current.value==register.name){
        console.log(data)
        
       }
      
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit_data)}>
                <input type="text" placeholder='Name' className='form-control' {...register('name', { required: true })} />
                {errors.name && <span className='text-danger'>This field is required</span>}
                <input type="email" placeholder='Email' className='form-control' {...register('email', { required: true })} />
                {errors.email && <span className='text-danger'>This field is required</span>}
                <input type="password" placeholder='Password' className='form-control' {...register('password', { required: true })} />
                {errors.password && <span className='text-danger'>This field is required</span>}

                <input type="text" placeholder='Confrim password' className='form-control' ref={confirmPassword} />
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
            <p className='lead'>Already have an account?</p>
            <Link className='btn btn-info' to='/' >Login</Link>
        </div>
    )
}
