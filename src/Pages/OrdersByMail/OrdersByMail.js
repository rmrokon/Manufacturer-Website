import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useOrders from '../../hooks/useOrders';
import useProductByOrder from '../../hooks/useProductByOrder';
import axiosPrivate from '../../interceptor/axiosPrivate';
import Loading from '../Shared/Loading';
import OrderStat from './OrderStat';

const OrdersByMail = () => {
    const [user, loading] = useAuthState(auth);
    const { email } = user;
    const [orders, setOrders] = useOrders(email);
    const [order, setOrder] = useState({});
    const navigate = useNavigate();
    const [product, setProduct] = useProductByOrder(order?.productName)

    useEffect(() => {
        console.log('this is product', product);
        const { quantity: orderQuantity } = order;
        const { quantity, ...rest } = product;
        const newQuantity = parseInt(quantity) + parseInt(orderQuantity);
        const updatedProduct = { newQuantity, ...rest };

        fetch("http://localhost:5000/updateQuantity", {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount === 1) {
                    toast.success("Order canceled successfully");
                    console.log('this is data', data);
                }
                else {
                    // toast("Something went wrong! Please try again!")
                    console.log("inside effect data", data);
                }
            })

    }, [order, product])

    if (loading) {
        return <Loading></Loading>
    }


    const handleCancelOrder = async (id) => {

        const order = orders.find(o => o._id === id);
        setOrder(order);

        const remaining = orders.filter(order => id !== order._id);
        axiosPrivate.delete(`http://localhost:5000/delete/${id}`).then(res => {
            setOrders(remaining);
            console.log(res);
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
                            <th className='text-center'>Product Name</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Total Amount</th>
                            <th>Shipping Address</th>
                            <th className='text-center'>Action</th>
                            {/* <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((p, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{p.productName}</td>
                                <td className='text-center'>{p.quantity}</td>
                                <td className='text-center'>{p.bill}</td>
                                <td>{p.address}</td>
                                <td><button onClick={() => handleCancelOrder(p._id, p.productName)} class="btn btn-error text-white">Cancel Order</button> <button class="btn btn-success text-white">Make Payment</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersByMail;