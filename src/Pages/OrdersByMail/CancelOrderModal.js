import React from 'react';

const CancelOrderModal = ({ handleCancelOrder, orderToBeCanceled }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-error btn-sm btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-lg">Are you sure you want to cancel the order?</h3>
                    <p className="py-4">Cancelling an order is ireversable. Press the "Confirm Cancel" button to cancel the order.</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" onClick={() => handleCancelOrder(orderToBeCanceled._id)} className="btn btn-error text-white">Confirm Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;