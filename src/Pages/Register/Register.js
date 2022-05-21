import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false);
    let createUserError;
    const navigate = useNavigate();
    const [token] = useToken(user || userGoogle);

    if (loading || loadingGoogle) {
        return <Loading></Loading>;
    }

    if (token) {
        navigate('/inventory');
    }

    const handleRegister = async (data) => {
        const { name, email, password, confirmPassword } = data;
        console.log(data);

        if (password !== confirmPassword) {
            createUserError = <small>Do not match</small>
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log("updated user")
    }

    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-accent text-center font-bold">Register</h2>

                    {createUserError}
                    {errorUpdate && <small className='text-red-400'>{errorUpdate.message}</small>}

                    <p className='text-red-400'>{createUserError && createUserError.message}</p>

                    {error && <small className='text-red-400'>{error.message}</small>}
                    <div>
                        <form action="" className='flex flex-col items-center' onSubmit={handleSubmit(handleRegister)}>

                            <input type="text" name='name' placeholder="Full Name" className="input w-full  mb-2 select-bordered" {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                            })} />

                            <p>{errors?.name?.type === "required" && <span className='text-red-400'>{errors?.name?.message}</span>}</p>

                            <input type="email" name='email' placeholder="Email Address" className="input w-full  mb-2 select-bordered" {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Please enter a valid email"
                                }

                            })} />

                            <p>{errors?.email?.type === "required" && <span className='text-red-400'>{errors?.email?.message}</span>}</p>

                            <input type="password" name='password' placeholder="Choose a Password" className="input w-full mb-2 select-bordered" {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                            })} />

                            <p>{errors.password?.type === "required" && <span className='text-red-400'>{errors.password?.message}</span>}</p>

                            <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input w-full mb-2 select-bordered" {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Cnnfirm Password is required"
                                },
                            })} />

                            <p>{errors.confirmPassword?.type === "required" && <span className='text-red-400'>{errors.confirmPassword?.message}</span>}</p>

                            <label className="label cursor-pointer">
                                <input type="checkbox" checked={agree} className="checkbox mr-2" onChange={() => setAgree(!agree)} />
                                <span className={`label-text ${!agree && "text-red-600"} text-base`}>Accept Smart Drilling terms and conditions?</span>
                            </label>

                            <p className='text-accent'>Already have an account? <span className='text-primary'><Link to={'/login'}>Login</Link></span></p>

                            <input className='btn btn-primary text-white font-bold bg-accent w-full mt-2' type="submit" value="Register" disabled={!agree} />
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

export default Register;