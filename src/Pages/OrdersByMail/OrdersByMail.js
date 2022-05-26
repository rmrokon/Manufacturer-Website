import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useOrders from '../../hooks/useOrders';
import useProductByOrder from '../../hooks/useProductByOrder';
import axiosPrivate from '../../interceptor/axiosPrivate';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';
import OrderDetails from './OrderDetails';
import OrderStat from './OrderStat';

const OrdersByMail = () => {
    const [user, loading] = useAuthState(auth);
    const { email } = user;
    const [orders, setOrders] = useOrders(email);
    const [order, setOrder] = useState({});
    const [product] = useProductByOrder(order?.productName);
    const [orderToBeCanceled, setOrderToBeCanceled] = useState(null);


    useEffect(() => {
        const { quantity: orderQuantity } = order;
        const { quantity, ...rest } = product;
        const newQuantity = parseInt(quantity) + parseInt(orderQuantity);
        const updatedProduct = { newQuantity, ...rest };

        fetch("https://smart-drilling.herokuapp.com/updateQuantity", {
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
                }
            })

    }, [order, product])

    if (loading) {
        return <Loading></Loading>
    }


    const handleCancelOrder = (id) => {

        const order = orders.find(o => o._id === id);
        setOrder(order);

        const remaining = orders.filter(order => id !== order._id);
        axiosPrivate.delete(`https://smart-drilling.herokuapp.com/delete/${id}`).then(res => {
            setOrders(remaining);
            console.log(res);
        })
    }

    return (
        <div className='min-h-screen w-full p-5'>
            <div className='flex justify-center my-5'>
                <OrderStat
                    orders={orders}
                ></OrderStat>
            </div>

            <div className="max-w-screen overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-center'>Product Name</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Total Amount</th>
                            <th>Shipping Address</th>
                            <th className='text-center'>Status</th>
                            {/* <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <OrderDetails
                                key={order._id}
                                order={order}
                                index={index}
                                setOrderToBeCanceled={setOrderToBeCanceled}
                            ></OrderDetails>)
                        }

                    </tbody>
                </table>
            </div>
            <CancelOrderModal
                handleCancelOrder={handleCancelOrder}
                orderToBeCanceled={orderToBeCanceled}
            ></CancelOrderModal>
        </div>
    );
};

export default OrdersByMail;