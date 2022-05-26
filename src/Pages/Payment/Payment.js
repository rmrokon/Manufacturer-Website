import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import cardImg from '../../assets/images/card-front.png';

const stripePromise = loadStripe('pk_test_51L1ntWED3yNbrkAHXvqMMhg0sAGJfLaSiWBhjzRXTsq3q404EMEcDmhMN2uEkYPFbWuwaoptJJBzSeQNxyGlpNKT001MnaVdyr');

const Payment = () => {
    const { orderId } = useParams();

    const url = `https://smart-drilling.herokuapp.com/orderById/${orderId}`;

    const { data: order, isLoading } = useQuery(['orderId', orderId], () => fetch(url, {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className='grid grid-cols-1 place-items-center my-12 w-full'>
            <div class="card w-full shadow-xl text-center">
                <div class="card-body">
                    <h3 className='text-center text-3xl text-accent mt-5 font-bold'>Make Payment</h3>
                    <h3 className='text-center text-3xl text-accent font-bold'>For</h3>

                    <h2 class="font-bold text-center text-2xl">{order?.productName}</h2>
                    <p>Quantity: <span className='font-bold'>{order?.quantity}</span></p>
                    <p>Amount: <span className='font-bold'>${order?.bill}</span></p>
                </div>
            </div>
            <div className='w-full my-5'>
                <div class="card w-96 glass mx-auto">
                    <figure><img src={cardImg} alt="car!" /></figure>
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order}></CheckoutForm>
                        </Elements>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;