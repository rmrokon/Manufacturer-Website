import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import useToken from '../../hooks/useToken.js';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loadingEmailSignIn,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // const [sendPasswordResetEmail, sending, errorResetPassword] = useSendPasswordResetEmail(
    //     auth
    // );
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || userGoogle);


    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loadingEmailSignIn || loadingGoogle) {
        return <Loading></Loading>
    }

    // if (user || userGoogle) {
    //     navigate(from, { replace: true })
    // }
    const handleLogin = (data) => {
        const { email, password } = data;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-accent text-center my-5 font-bold">Login</h2>
                    {error && <p className='text-red-400'>{error.message}</p>}
                    <div className=''>
                        <form action="" className='flex flex-col items-center' onSubmit={handleSubmit(handleLogin)}>

                            <input type="email" name='email' placeholder="Email Address" className="input w-full  mb-2 select-bordered" {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                }
                            })} />

                            {errors.email?.type === "required" && <p className='text-red-400'>{errors.email.message}</p>}

                            <input type="password" name='password' placeholder="Enter Password" className="input w-full mb-2 select-bordered" {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            })} />

                            {errors.password?.type === "required" && <p className='text-red-400'>{errors.password.message}</p>}

                            <p className='text-accent text-left'>Forgot Password?</p>



                            <input className='btn btn-primary text-white font-bold bg-accent w-full mt-2' type="submit" value="Login" />

                            <p className='text-accent'>New to Smart-Drilling? <span className='text-primary'><Link to={"/register"}>Register</Link></span></p>
                        </form>
                    </div>
                    <div className="divider">OR</div>
                    <p className='text-red-400'>{errorGoogle && errorGoogle.message}</p>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>


                </div>
            </div>
        </div>
    );
};

export default Login;