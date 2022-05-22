import { TrashIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../../interceptor/axiosPrivate';
import Loading from '../Shared/Loading';
import OrderStat from './OrderStat';

const OrdersByMail = () => {
    const [user, loading] = useAuthState(auth);
    const { email } = user;
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const url = `http://localhost:5000/myOrders/${email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])

    if (loading) {
        return <Loading></Loading>
    }

    const handleCancelOrder = async (id) => {
        const rest = orders.filter(order => id !== order._id);
        await axiosPrivate.delete(`http://localhost:5000/delete/${id}`).then(res => {
            setOrders(rest);
            console.log(res)
        })
    }


    return (
        <div className='p-12'>
            <div className='flex justify-center my-5'>
                <OrderStat
                    orders={orders}
                ></OrderStat>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Shipping Address</th>
                            <th>Email</th>
                            <th>Action</th>
                            {/* <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((p, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{p.productName}</td>
                                <td>{p.quantity}</td>
                                <td>{p.bill}</td>
                                <td>{p.address}</td>
                                <td>{p.email}</td>
                                <td><button onClick={() => handleCancelOrder(p._id)} class="btn btn-error">Cancel Order</button> <button class="btn btn-success">Proceed to Payment</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersByMail;