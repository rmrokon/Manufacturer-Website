import { signOut } from 'firebase/auth';
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import axiosPrivate from '../../interceptor/axiosPrivate';
import Loading from '../Shared/Loading';

const OrderForm = ({ product, orderQuantity, setOrderQuantity }) => {
    const [user, loading] = useAuthState(auth);
    const { name, price, quantity, min_order } = product;
    const formRef = useRef();
    const navigate = useNavigate();

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

        const placeOrder = async () => {
            const url = "https://smart-drilling.herokuapp.com/placeOrder";
            try {
                const { data } = await axiosPrivate.post(url, order);
                if (data.insertedId) {
                    toast.success("Order Placed Successfully!");
                    const { quantity, ...rest } = product;
                    const newQuantity = parseInt(quantity) - orderQuantity;
                    const updatedProduct = { newQuantity, ...rest };

                    fetch("https://smart-drilling.herokuapp.com/updateQuantity", {
                        method: 'PATCH',
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(updatedProduct)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                    navigate("/dashboard/myOrders")
                }
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        }

        placeOrder();

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
                <div className="form-control mt-4">
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

                    <input onBlur={(event) => setOrderQuantity(event.target.value)} type="number" defaultValue={min_order} className="input input-bordered" />
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
                    <input type="number" className="input input-bordered" name='bill' value={(orderQuantity ? (orderQuantity * price) : (min_order * price))} disabled />
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