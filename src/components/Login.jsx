import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate=useNavigate()
    let correctdata = [
        {
            email: "Akshaj@gmail.com",
            password: "Akshaj123"
        },
        {
            email: "Codeyoung@gmail.com",
            password: "Codeyoung123"
        }
    ]
    const { register, handleSubmit, formState: { errors } } = useForm()
    let submit_data = (data) => {
        let emailflag = 0
        let passwordflag = 0
        correctdata.forEach(obj => {
            if (obj.email?.toLowerCase() == data.email.toLowerCase()) {
                emailflag=1
                if (obj.password==data.password){
                    passwordflag=1
                }
            }
        })
        if(emailflag && passwordflag){
            navigate("dashboard")
        }
        else{
            alert("invalid credentials")
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit_data)}>
                <input type="email" placeholder='Email' className='form-control' {...register('email', { required: true })} />
                {errors.email && <span className='text-danger'>This field is required</span>}
                <input type="password" placeholder='Password' className='form-control' {...register('password', { required: true })} />
                {errors.password && <span className='text-danger'>This field is required</span>}
                <br></br>
                <button type='submit' className='btn btn-success'>Login</button>
            </form>
            <p className='lead'>A new user?</p>
            <Link className='btn btn-info' to="signup" >Signup</Link>
        </div>
    )
}
