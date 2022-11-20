import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        signIn(data.email, data.password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);
            toast.success('Successfully Login');
        })
        .catch(error => {
            console.log(error);
            setLoginError(error.message);
        })
    }

    return (
            <div className='w-96 mx-auto flex flex-col gap-2 shadow-lg p-7 rounded-lg my-20'>
                <h1 className='text-2xl font-medium text-center pb-5'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {required:"Email Address is required"}, )} className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                         {...register("password", {
                            required:"Password is required",
                            minLength: { value: 6, message: "Password must be 6 charecters or longer" }
                        })}
                         className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Forgot Password ?</span>
                        </label>
                        {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                    </div> 
                    <input className='btn btn-accent w-full' type="submit" value="Login" />
                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal? <Link to="/signup" className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
    );
};

export default Login;