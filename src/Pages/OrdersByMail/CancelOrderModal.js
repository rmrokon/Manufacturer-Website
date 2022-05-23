import React from 'react';

const CancelOrderModal = ({ handleCancelOrder, orderToBeCanceled }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="my-modal" class="btn btn-error btn-sm btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 class="font-bold text-lg">Are you sure you want to cancel the order?</h3>
                    <p class="py-4">Cancelling an order is ireversable. Press the "Confirm Cancel" button to cancel the order.</p>
                    <div class="modal-action">
                        <label for="my-modal" onClick={() => handleCancelOrder(orderToBeCanceled._id)} class="btn btn-error text-white">Confirm Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;