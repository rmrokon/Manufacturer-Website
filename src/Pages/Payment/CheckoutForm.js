import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';


const CheckoutForm = ({ order }) => {
    const elements = useElements();
    const stripe = useStripe();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { bill, userName, email, _id } = order;
    const [txId, setTxId] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://smart-drilling.herokuapp.com/create-payment-intent", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ bill })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [bill])

    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            setCardError('');
            setProcessing(true);
        }

        const { paymentIntent, error: errorIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email,
                    },
                },
            },
        );

        if (errorIntent) {

            setCardError(errorIntent?.message);
            setProcessing(false);

        }
        else {

            setTxId(paymentIntent.id);
            setCardError('');
            setSuccess('Payment Done');

            // Updating backend
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }

            fetch(`https://smart-drilling.herokuapp.com/updatePayment/${_id}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json()).then(data => {
                setProcessing(true);
                console.log(data)
                navigate('/myorders')
            })
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-s btn-success mt-3' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-400'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-400'>{success}</p>
                    <p className='text-green-400'>Your transaction Id: {txId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;