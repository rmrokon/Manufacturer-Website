import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../interceptor/axiosPrivate';
import OrderDetails from '../OrdersByMail/OrderDetails';
import Loading from '../Shared/Loading';

const ManageOrders = () => {
    // const [orders, setOrders] = useState([]);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch("https://smart-drilling.herokuapp.com/orders", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))


    return (
        <div className='w-full max-h-screen p-5'>
            <h3>Total orders: {orders?.length}</h3>
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
                                refetch={refetch}
                            // setOrderToBeCanceled={setOrderToBeCanceled}
                            ></OrderDetails>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;