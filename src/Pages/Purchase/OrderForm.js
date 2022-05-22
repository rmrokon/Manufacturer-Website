import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const OrderForm = ({ product, orderQuantity, setOrderQuantity }) => {
    const [user, loading] = useAuthState(auth);
    const { name, price, quantity, min_order } = product;
    const formRef = useRef();

    const handlePurchase = (e) => {

        e.preventDefault();
        const order = {
            userName: user?.displayName,
            email: user?.email,
            productName: name,
            price: price,
            quantity: orderQuantity,
            address: e.target.address.value,
            phone: e.target.phone.value,
            bill: e.target.bill.value,
        }

        console.log(order);
        formRef.current.reset();
    }

    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <form onSubmit={handlePurchase} ref={formRef}>
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" className="input input-bordered" value={`${user.displayName}`} disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" className="input input-bordered" value={`${user.email}`} disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="number" className="input input-bordered" name='phone' />
                </div>
                <div className="form-control">

                    <label className="input-group">
                        <span>Price</span>
                        <input type="number" value={price} className="input input-bordered" disabled />
                        <span>USD</span>
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Quantity</span>
                    </label>

                    <input onBlur={(event) => setOrderQuantity(event.target.value)} type="number" defaultValue={orderQuantity} className="input input-bordered" />
                    {
                        (orderQuantity < min_order) && <span className='text-red-400'>Minimum Order Quantity is: {min_order}</span>
                    }
                    {
                        (orderQuantity > quantity) && <span className='text-red-400'>Sorry! We have {quantity} units in our stock currently!</span>
                    }
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Cost (USD)</span>
                    </label>
                    <input type="number" className="input input-bordered" name='bill' value={((orderQuantity >= min_order) && (orderQuantity < quantity) && (orderQuantity * price))} disabled />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea className="textarea textarea-bordered" style={{ resize: "none" }} name="address"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-primary text-white' type="submit" value="Place Order" disabled={(orderQuantity < min_order) || (orderQuantity > quantity)} />
                </div>
            </div>
        </form>
    );
};

export default OrderForm;