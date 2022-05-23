import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = ({ order, index, setOrderToBeCanceled, paid, setPaid }) => {
    const { productName, quantity, bill, address } = order;
    return (
        <tr key={index}>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>{bill}</td>
            <td>{address}</td>
            <td className='text-center'>{paid ? <span className='bg-green-400 text-xl text-white px-4 py-2 rounded-lg'>Paid</span> : <>
                <label htmlFor='my-modal' onClick={() => setOrderToBeCanceled(order)} class="btn btn-error text-white modal-button mr-2">Cancel Order</label>

                <Link to={'payment'}><button class="btn btn-success text-white">Make Payment</button></Link>
            </>}</td>
        </tr>
    );
};

export default OrderDetails;