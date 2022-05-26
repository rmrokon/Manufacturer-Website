import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import axiosPrivate from '../../interceptor/axiosPrivate';

const OrderDetails = ({ order, index, setOrderToBeCanceled, refetch }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const { productName, quantity, bill, address, _id, paid, transactionId, shipped } = order;

    const handleShipped = () => {
        axiosPrivate.put(`https://smart-drilling.herokuapp.com/order/shipped/${_id}`).then(res => {
            if (res?.data?.modifiedCount === 1) {
                toast.success("Order status changed successfully!");
                refetch();
            }
        })
    }


    return (
        <tr key={index} className="">
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>{bill}</td>
            <td>{address}</td>
            <td className='text-center'>{

                !admin ? <>
                    {paid ? <div className=''>
                        <p className='bg-green-400 text-sm text-white w-1/4 mx-auto rounded-lg'>Paid</p>
                        <small className='text-sm text-accent px-2 py-1 rounded-sm mt-2'>Transaction Id: <br /> {transactionId}</small>
                    </div>

                        :

                        <>
                            <label htmlFor='my-modal' onClick={() => setOrderToBeCanceled(order)} class="btn btn-sm btn-error text-white modal-button mr-2">Cancel Order</label>

                            <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-sm btn-success text-white">Make Payment</button></Link>
                        </>}
                </>
                    :
                    <>
                        {
                            !paid &&

                            <>
                                <span className='btn btn-sm mr-2'>Unpaid</span>

                                <label htmlFor='my-modal' onClick={() => setOrderToBeCanceled(order)} class="btn btn-sm btn-error text-white modal-button mr-2">Cancel Order</label>

                            </>

                        }

                        {
                            paid && <button onClick={handleShipped} className='btn btn-sm mr-2'>{shipped ? "shipped" : "Pending"}</button>
                        }


                    </>
            }</td>
        </tr>
    );
};

export default OrderDetails;