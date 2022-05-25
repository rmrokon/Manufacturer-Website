import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = ({ order, index, setOrderToBeCanceled }) => {
    const { productName, quantity, bill, address, _id, paid, transactionId } = order;
    return (
        <tr key={index} className="">
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>{bill}</td>
            <td>{address}</td>
            <td className='text-center'>{

                paid ? <div className=''>
                    <p className='bg-green-400 text-xl text-white w-1/4 mx-auto rounded-lg'>Paid</p>
                    <p className='bg-gray-200 text-sm text-accent px-2 py-1 rounded-sm mt-2'>Transaction Id: <br /> {transactionId}</p>
                </div>

                    :

                    <>
                        <label htmlFor='my-modal' onClick={() => setOrderToBeCanceled(order)} class="btn btn-error text-white modal-button mr-2">Cancel Order</label>

                        <Link to={`/payment/${_id}`}><button class="btn btn-success text-white">Make Payment</button></Link>
                    </>}</td>
        </tr>
    );
};

export default OrderDetails;