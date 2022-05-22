import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderForm from './OrderForm';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { name, description, price, quantity, min_order, img } = product;
    let [orderQuantity, setOrderQuantity] = useState(min_order);


    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setOrderQuantity(min_order)

            })
    }, [])




    if (!product || loading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="card bg-base-100 shadow-xl p-2">
                            <figure><img src={img} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>{description}</p>
                                <div>
                                    <p className='font-bold'>Price: ${price}</p>
                                    <p><span className='text-green-600'>Stock Available:</span> {quantity} units</p>
                                    <p>Minimum Order: {min_order} units</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <OrderForm
                            product={product}
                            orderQuantity={orderQuantity}
                            setOrderQuantity={setOrderQuantity}
                        ></OrderForm>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;